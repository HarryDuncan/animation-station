import {IMusicState, musicActionTypes, IPlaylist} from './music.types';
import update from 'immutability-helper';
import { remote } from 'electron';

const initialMusicState : IMusicState = {
	playlistEditorOpen : false,
	playlists : []
}



function music (state: IMusicState = initialMusicState, action: any){
	switch(action.type) {
		case musicActionTypes.TOGGLE_PLAYLIST_EDITOR:
			return{...state,
				playlistEditorOpen : !state.playlistEditorOpen
			}
		default:
			return state;

	}
}

export default music;
