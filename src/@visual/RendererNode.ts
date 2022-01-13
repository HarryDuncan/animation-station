import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  initializeAllScenes,
  getScene,
  deleteAllScenes,
  updateSceneManager,
} from "./SceneManager";
import { dataPoints } from "./data/dataPoints";
import { changeToLight } from "../../store/app/app.actions";
import framework from "./data/Framework";
import { connect } from "react-redux";

let currentVisualizer: any;

interface IRendererNodeProps {
  isFullScreen: boolean;
  isPlaying: boolean;
  changeToLight: any;
}
// This node is where the controler meets the visualizer
const PythobRendererNode: React.FunctionComponent<IRendererNodeProps> = ({
  audioRef,
  changeToLight,
}) => {
  // Ref
  const visualizerElement = useRef(null);

  const switchVisualizers = (framework: any, dispatchFunctions: any) => {
    if (!framework.breakAnimation && framework.isPlaying) {
      if (framework.streamData.change) {
        // @ts-ignore
        currentVisualizer = getScene(framework);
        // @ts-ignore
        framework.scene = currentVisualizer.scene;
        // @ts-ignore
        framework.camera = currentVisualizer.camera;

        // @ts-ignore
        framework.streamData.change = false;
        dispatchFunctions(currentVisualizer);

        setTimeout(() => {
          switchVisualizers(framework, dispatchFunctions);
        }, currentVisualizer.sceneLength);
      } else {
        setTimeout(() => {
          switchVisualizers(framework, dispatchFunctions);
        }, 10);
      }
    }
  };

  const createScene = () => {
    if (!!framework && framework !== null) {
      framework.breakAnimation = false;

      // Yes the ts-ignores are bad - I'm just getting this code to work and will not be devloping this version further
      // Creates Analyzer Nodes to analyze audio data ----- Audio Context stuff
      framework.isPlaying = true;
      framework.isInitialized = true;

      // Initializes 3 JS Stuff
      // @ts-ignore
      framework.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      // @ts-ignore
      framework.renderer.setSize(window.innerWidth, window.innerHeight);
      // framework.renderer.outputEncoding = THREE.sRGBEncoding;
      // @ts-ignore
      framework.renderer.shadowMap.enabled = true;
      // @ts-ignore
      framework.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
      // @ts-ignore
      visualizerElement.current.appendChild(framework.renderer.domElement);

      window.addEventListener("resize", onWindowResize, false);
      initializeAllScenes(framework);
      // @ts-ignore
      currentVisualizer = getScene(framework);
      // @ts-ignore
      framework.scene = currentVisualizer.scene;
      // @ts-ignore
      framework.camera = currentVisualizer.camera;
      // @ts-ignore
      framework.renderer.render(framework.scene, framework.camera);
      // @ts-ignore
      switchVisualizers(framework, dispatchFunctions);

      const tick = () => {
        currentVisualizer.onUpdate(framework); // perform any requested updates
        // @ts-ignore
        framework.renderer.render(framework.scene, framework.camera); // render the scene
        // @ts-ignore
        updateSceneManager(framework);
        if (!framework.breakAnimation) {
          requestAnimationFrame(tick); // register to call this again when the browser renders a new frame
        }
      };
      tick();
    }

    function onWindowResize() {
      // @ts-ignore
      framework.camera.aspect = window.innerWidth / window.innerHeight;
      // @ts-ignore
      framework.camera.updateProjectionMatrix();
      // @ts-ignore
      framework.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  };

  // Functions if we need to update app state while visualizer is playing
  const dispatchFunctions = (data: any) => {
    if (data.backgroundDark) {
      changeToLight(true);
    } else {
      changeToLight(false);
    }
  };

  // componentWillUnmount() {
  //   framework.breakAnimation = true;
  //   if (framework.renderer !== undefined && framework.renderer !== null) {
  //     framework.renderer.dispose();
  //   }
  //   deleteAllScenes();
  //   this.props.audio.pause();
  //   window.removeEventListener("resize", this.handleResize, false);
  // }
  //
  // togglePlaying = () => {
  //   framework.isPlaying = !framework.isPlaying;
  // };

  if (isPlaying && !framework.isPlaying && !!audioRef) {
    framework.isPlaying = true;
    if (!framework.isInitialized) {
      createScene();
    }
  } else if (!isPlaying && framework.isPlaying) {
    framework.isPlaying = false;
  }
  return (
    <div
      id={"vizualizer-full"}
      className={"visualizer-node-full"}
      ref={visualizerElement}
    ></div>
  );
};

const mapDispatchToProps = {
  changeToLight,
};

export default connect(null, mapDispatchToProps)(RendererNode);
