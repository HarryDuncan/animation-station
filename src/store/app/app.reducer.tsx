import {IAppState, appActionTypes} from './app.types';
import update from 'immutability-helper';


const initialAppState : IAppState = {
	content : null,
	isInitialized : false,
	siteStatus : 'Open',
	sitePages : [],
	showNav : true,
	settings : {},
	heroMessage : null,
	testCode  : 0,
	mixes : [],
	emailData : {}
}



function app(state: IAppState = initialAppState, action: any){
	switch(action.type) {
		case appActionTypes.UNLOCK_SITE:
			
			return update(state, {
				testingOn : {$set : false},
				heroMessage : {$set : null}
			})
		
		default:
			return state;
	
	}
}

export default app;

