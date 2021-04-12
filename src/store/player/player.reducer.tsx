import {IPlayerState, playerActionTypes} from './player.types';
import update from 'immutability-helper';
import { remote } from 'electron';

const initialPlayerState : IPlayerState = {
	listMenuOpen : false,
	trackList : [],
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
		case playerActionTypes.ADD_TO_LIST:
			return update(state, {
				trackList : {$push : action.payload.addedTracks.map((item : any, i : number)  => ({...item, 'ID' : Number(i), 'Title' : item['name'] ,'src' : item['path'], 'path' : item['path']}))}
			});
		default:
			return state;
	
	}
}

export default musicPlayer;
