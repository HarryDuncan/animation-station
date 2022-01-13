import { musicActionTypes, ITrack } from "./music.types";

// ######################################################
// Playlist Editor - opening, closing adding and removing
// #######################################################

// Toggles the add track menu
export const openPlaylistManager = (playlistKey?: number | string) => {
  return function (dispatch: any) {
    if (playlistKey === "new") {
      dispatch({ type: musicActionTypes.NEW_PLAYLIST, payload: playlistKey });
    } else {
      dispatch({
        type: musicActionTypes.OPEN_PLAYLIST_EDITOR,
        payload: playlistKey,
      });
    }
  };
};

export const setUpPlaylists = (playlistNames: string[]) => {
  return function (dispatch: any) {
    dispatch({
      type: musicActionTypes.SET_UP_PLAYLISTS,
      payload: playlistNames,
    });
  };
};

export const setUpPlaylistItems = (
  playlistItems: string[],
  playlistIndex: number
) => {
  return function (dispatch: any) {
    dispatch({
      type: musicActionTypes.SET_UP_PLAYLIST_ITEMS,
      payload: { tracks: playlistItems, index: playlistIndex },
    });
  };
};

// Toggles the add track menu
export const closePlaylistManager = (playlistKey?: number) => {
  return function (dispatch: any) {
    dispatch({ type: musicActionTypes.CLOSE_PLAYLIST_EDITOR });
  };
};

export const addToPlaylist = (trackItem: any[]) => {
  return function (dispatch: any) {
    dispatch({ type: musicActionTypes.ADD_TO_PLAYLIST, payload: trackItem });
  };
};

export const removeFromPlaylist = (itemIndex: number) => {
  return function (dispatch: any) {
    dispatch({
      type: musicActionTypes.REMOVE_FROM_PLAYLIST,
      payload: itemIndex,
    });
  };
};

// ######################################################
// Play/pause/skip of a track
// #######################################################

export const playTrack = (trackIndex: number, playPause?: boolean) => {
  return function (dispatch: any) {
    if (playPause === false) {
      dispatch({ type: musicActionTypes.PAUSE_TRACK, payload: trackIndex });
    } else {
      dispatch({ type: musicActionTypes.PLAY_TRACK, payload: trackIndex });
    }
  };
};

// Accepts -1 or 1 to go forward or back
export const skipTrack = (moveBy: number) => {
  return function (dispatch: any) {
    dispatch({ type: musicActionTypes.SKIP_TRACK, payload: moveBy });
  };
};

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
