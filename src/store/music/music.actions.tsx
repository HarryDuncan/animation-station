// import {getData, postData, formatSubmissionData} from './../mainFunctions';
import {musicActionTypes} from './music.types';

export const closeWindow = () => {
	return function (dispatch : any) {
		dispatch({type : musicActionTypes.CLOSE_CURRENT_WINDOW})
	}
}

// Toggles the add track menu
export const togglePlaylistEditor = () => {
	return function (dispatch : any) {
			dispatch({type : musicActionTypes.TOGGLE_PLAYLIST_EDITOR})
		}
	}
}

//
// export const isDragging  = () => {
// 	return function(dispatch : any) {
// 		dispatch({type : musicActionTypes.DRAGGING_FILES})
// 	}
// }
//
// export const stopDragging = () => {
// 	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.NOT_DRAGGING_FILES})
// 	}
// }
//
//
// export const addToList = () => {
// 	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.ADD_TO_LIST})
// 	}
// }
//
//  export const getSongPlaying = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.GET_SONG_PLAYING})
// 	}
//  }
//
//  export const getList = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.GET_TRACK_LIST})
// 	}
//  }
//
//  export const closeList = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.CLOSE_LIST})
// 	}
//  }
//
//  export const reorderedList = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.REORDER_LIST})
// 	}
//  }
// export const addToTrackList = (addedTracks : any) => {
// 	return function(dispatch : any){
// 		dispatch({type :musicActionTypes.ADD_TO_LIST, payload : {addedTracks}})
// 	}
// }
//  export const pauseSong = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.PAUSE_TRACK})
// 	}
//  }
//
//  export const playSong = () => {
//  	return function(dispatch : any){
// 		dispatch({type : musicActionTypes.PLAY_TRACK})
// 	}
//  }
