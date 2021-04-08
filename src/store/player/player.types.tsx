export interface IPlayerState{
	
	// If the menu for selecting tracks or folders is open
	listMenuOpen : boolean;
	trackList : any[];
}

export enum playerActionTypes {

	CLOSE_CURRENT_WINDOW = 'musicPlayer/CLOSE_CURRENT_WINDOW',
	OPEN_LIST_MENU = 'musicPlayer/OPEN_LIST_MENU',
	CLOSE_LIST_MENU = 'musicPlayer/CLOSE_LIST_MENU',
	DRAGGING_FILES = 'musicPlayer/DRAGGING_FILES',
    NOT_DRAGGING_FILES = 'musicPlayer/NOT_DRAGGING_FILES',
    DROP_FILES = 'musicPlayer/DROP_FILES',
    ADD_TO_LIST = 'musicPlayer/ADD_TO_LIST',
    GET_SONG_PLAYING = 'musicPlayer/GET_SONG_PLAYING',
    GET_TRACK_LIST = 'musicPlayer/GET_TRACK_LIST',
    CLOSE_LIST = 'musicPlayer/CLOSE_LIST',
    REORDER_LIST = 'musicPlayer/REORDER_LIST',
    PAUSE_TRACK = 'musicPlayer/PAUSE_TRACK',
    PLAY_TRACK = 'musicPlayer/PLAY_TRACK'
}