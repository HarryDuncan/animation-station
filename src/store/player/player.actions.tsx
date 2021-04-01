// import {getData, postData, formatSubmissionData} from './../mainFunctions';
import {playerActionTypes} from './player.types';

export const closeWindow = () => {
	return function (dispatch : any) {
		dispatch({type : playerActionTypes.CLOSE_CURRENT_WINDOW})
	}
}


export const toggleListMenu = () => {
	return function (dispatch : any, getState : () => any) {
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
		dispatch({type : playerActionTypes.DROP_FILES})
	}
}

