import * as Scenes from './visual/GenericScenes'
// Main Frame where everything gets managed and exported to vizualizer node

// An Array of scene objects - selected for display
let loadedScenes : any[] = [];

// Number of the index of the loaded scenes - to display
let currentVisualizer : number;


// Function to initalize the visualizer engine
export const init = (framework) => {

	loadedScenes.push(Scenes.BallAndPlane(framework))
	loadedScenes.push(Scenes.BallAndPlane(framework))
	loadedScenes.push(Scenes.BallAndPlane(framework))
    // loadedScenes.push(Scenes.StarField(framework))
   // allScenes.push(Scenes.DancingBlocks(framework))

     
     
   
   // allScenes.push(Scenes.CubeWithTexture(framework))
    for (var i = 0; i < loadedScenes.length -1; i++) {
        loadedScenes[i].index = i;
    }




}

// Function to dispose the engine when unmounting
export const dispose = () => {
	loadedScenes = []
}


export function getSceneByIndex(sceneIndex) {
    return loadedScenes[sceneIndex];
}