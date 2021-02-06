import React from 'react';
import {VisualizerNode} from './../../VisualizerNode';

const path = require('path');
const url = require('url');
const fs = require('fs');


export function mountComponent() {
  let opts = this.setOpts([
    'playIcon',
    'playHoverIcon',
    'pauseIcon',
    'pauseHoverIcon',
    'volumeIcon',
    'volumeEngagedIcon',
    'muteIcon',
    'muteEngagedIcon',
    'forwardIcon',
    'forwardHoverIcon',
    'rewindIcon',
    'rewindHoverIcon',
    'loopIcon',
    'loopEngagedIcon',
    'fontFamily',
    'fontWeight',
    'fontSize',
    'fontColor',
    'sliderClass',
    'playerWidth',
    'iconSize'
  ]);
  this.setState(opts, () => {
    if (!this.props.hideName) 
      this.setScrollSize();
    this.setPercentages();
  });
}

export function setOpts(settings) {
  let opts = {};
  settings.forEach(setting => {
    opts[setting] = this.props[setting]
      ? this.props[setting]
      : this.state[setting];
  })
  return opts;
}

export function setScrollSize() {
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      if (this.nameDisplay) {
        let marqueeWidth = this.nameDisplay.scrollWidth;
        let nameDisplayWidth = this.nameDisplay.offsetWidth;
        if (marqueeWidth > nameDisplayWidth) {
          let scrollTime = Math.round((marqueeWidth / nameDisplayWidth) * 1.7);
          let difference = marqueeWidth - nameDisplayWidth;
          this.setState({scrollMarquee: true, scrollDifference: difference, scrollTime});
        }
      }
    })
  }, 0);
}

export function setNameDisplayRef(el) {
  this.nameDisplay = el
}

export function setStyle(tier) {
  let style = {
    fontFamily: this.state.fontFamily,
    fontWeight: this.state.fontWeight,
    color: this.state.fontColor,
    fontSize: this.state.fontSize,
    width: `${this.state.playerWidth}`,
    height: this.state.playerHeight
  }
  if (tier) {
    style.display = "flex";
    style.flexDirection = "column";
  }
  return style;
}

   
  

export function setAudio(context) {

  let srcData = fs.readFile(`/Users/harry/Desktop/DevProjects/animationStation/public/${this.props.audioFiles[this.state.currentTrackIdx]['StreamUrl']}`,(err, data) => {
    if(err){
      throw err;
    } 
    console.log(data);
    })

  return <div>

    <audio
      src={srcData}
      ref={(audioRef) => {
      this.audioRef = audioRef;
    }}
    onLoadedMetadata={this.loadDuration}
    // onSuspend={() => clearInterval(this.seekingInterval)}
    onPlay={this.startPlay}
    onEnded={this.endPlay}
    />

    <VisualizerNode audioCtx={context} audio={this.audioRef} isFullScreen={this.props.visualizerFullScreen} playerState={this.state}  />
    </div>
}

export function setPercentages() {
  if (this.props.rearrange) {
    this.setState({volumeWidth: "100%", nameWidth: "100%", seekWidth: "100%"})
  } else if (this.props.hideSeeking && this.props.hideName) {
    this.setState({volumeWidth: "100%"});
  } else if (this.props.hideSeeking) {
    this.setState({volumeWidth: "50%", nameWidth: "50%"})
  } else if (this.props.hideName) {
    this.setState({volumeWidth: "50%", seekWidth: "50%"})
  }
}