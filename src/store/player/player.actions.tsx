// import {getData, postData, formatSubmissionData} from './../mainFunctions';
import {playerActionTypes} from './player.types';

export const closeWindow = () => {
	return function (dispatch : any) {
		dispatch({type : playerActionTypes.CLOSE_CURRENT_WINDOW})
	}
}

// Toggles the add track menu
export const toggleListMenu = () => {
	return function (dispatch : any, getState : () => any) {
		console.log(getState().musicPlayer.listMenuOpen)
		if(getState().musicPlayer.listMenuOpen){
			dispatch({type : playerActionTypes.CLOSE_LIST_MENU})
		}else{
			dispatch({type : playerActionTypes.OPEN_LIST_MENU})
		}
	}
}


export const isDragging  = () => {
	return function(dispatch : any) {
		dispatch({type : playerActionTypes.DRAGGING_FILES})
	}
}

export const stopDragging = () => {
	return function(dispatch : any){
		dispatch({type : playerActionTypes.NOT_DRAGGING_FILES})
	}
}


export const addToList = () => {
	return function(dispatch : any){
		dispatch({type : playerActionTypes.ADD_TO_LIST})
	}
}

 export const getSongPlaying = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.GET_SONG_PLAYING})
	}
 }

 export const getList = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.GET_TRACK_LIST})
	}
 }

 export const closeList = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.CLOSE_LIST})
	}
 }
 
 export const reorderedList = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.REORDER_LIST})
	}
 }
export const addToTrackList = (addedTracks : any) => {
	return function(dispatch : any){
		dispatch({type :playerActionTypes.ADD_TO_LIST, payload : {addedTracks}})
	}
}
 export const pauseSong = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.PAUSE_TRACK})
	}
 }

 export const playSong = () => {
 	return function(dispatch : any){
		dispatch({type : playerActionTypes.PLAY_TRACK})
	}
 }