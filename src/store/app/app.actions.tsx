// import {getData, postData, formatSubmissionData} from './../mainFunctions';
import {appActionTypes} from './app.types';

export const unlockApp = () => {
	return function (dispatch : any) {
		dispatch({type : appActionTypes.UNLOCK_SITE})
	}
}
