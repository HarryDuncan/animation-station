export interface IPlayerState{
	
	// If the menu for selecting tracks or folders is open
	listMenuOpen : boolean;
}

export enum playerActionTypes {

	CLOSE_CURRENT_WINDOW = 'musicPlayer/CLOSE_CURRENT_WINDOW',
	OPEN_LIST_MENU = 'musicPlayer/OPEN_LIST_MENU',
	CLOSE_LIST_MENU = 'musicPlayer/CLOSE_LIST_MENU',
	DRAGGING_FILES = 'musicPlayer/DRAGGING_FILES',
    NOT_DRAGGING_FILES = 'musicPlayer/NOT_DRAGGING_FILES',
    DROP_FILES = 'musicPlayer/DROP_FILES'
}