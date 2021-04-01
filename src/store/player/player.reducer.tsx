import {IPlayerState, playerActionTypes} from './player.types';
import update from 'immutability-helper';
import { remote } from 'electron';

const initialPlayerState : IPlayerState = {
	listMenuOpen : false,
}



function musicPlayer(state: IPlayerState = initialPlayerState, action: any){
	switch(action.type) {
		case playerActionTypes.CLOSE_CURRENT_WINDOW:
			remote.getCurrentWindow().close();
			return state;
		case playerActionTypes.OPEN_LIST_MENU:
			return {...state,
				listMenuOpen : true
			};
		case playerActionTypes.CLOSE_LIST_MENU:
			return {...state,
				listMenuOpen : false
			};
		default:
			return state;
	
	}
}

export default musicPlayer;
