import {IMusicState, musicActionTypes, IPlaylist} from './music.types';
import update from 'immutability-helper';
import { remote } from 'electron';

const initialMusicState : IMusicState = {
	playlistManagerOpen : false,
	playlistManagerIndex : -1,
	playlists : [],
	playlistChangeKey : false,

	playlistPlayingIndex   : -1,
	playingTrackIndex : -1
}



function music (state: IMusicState = initialMusicState, action: any){
	switch(action.type) {

		case musicActionTypes.PLAY_TRACK:
			return update(state, {
					playlistPlayingIndex : {$set :state.playlistManagerIndex},
					playingTrackIndex : {$set : action.payload}
				})
		// ######################################
		// PLAYLIST MANAGEMENT
		// #######################################
		case musicActionTypes.NEW_PLAYLIST :
			return update(state, {
				playlistManagerOpen : {$set :true},
				playlistManagerIndex : {$set :state.playlists.length },
				playlists : {$push : [{playlistId : state.playlists.length, playlistTitle : `New Playlist ${state.playlists.length + 1}`, playlistTracks : [], 	saved : false }] } ,
				})
		case musicActionTypes.OPEN_PLAYLIST_EDITOR :
			return update(state, {
				playlistManagerOpen : {$set :true},
				playlistManagerIndex : {$set :  action.payload},

				})
		case musicActionTypes.CLOSE_PLAYLIST_EDITOR :
			return update(state, {
				playlistManagerOpen : {$set : false},
				playlistManagerIndex : {$set : -1}
				})

		case musicActionTypes.ADD_TO_PLAYLIST:
			let newPlaylists = state.playlists
			// Format payload - so its in ITrack format
			newPlaylists[state.playlistManagerIndex]['playlistTracks'] = newPlaylists[state.playlistManagerIndex]['playlistTracks'].concat(action.payload.map((item, index) => ({trackTitle : item['name'], trackId : state.playlists[state.playlistManagerIndex]['playlistTracks'].length + index, src : item['path'], trackType : item['type']}) ))
			newPlaylists[state.playlistManagerIndex]['saved'] = true
			return update(state, {
					playlists : {$set : newPlaylists},
					playlistChangeKey : {$set : !state.playlistChangeKey}
			})

		// TODO
		case musicActionTypes.REMOVE_FROM_PLAYLIST:
				return{...state,

				}
		default:
			return state;

	}
}

export default music;
