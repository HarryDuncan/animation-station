export interface ITrack{
	trackTitle : string;
	trackId : number;
	src : any;
	trackPath?: string;
	trackType?:string;
}


export interface IPlaylist{
	playlistId : number;
	playlistTitle : string;

	playlistTracks : ITrack[];
	saved : boolean;
}



export interface IMusicState{

	// Importing tracks
	// If the menu for selecting tracks or folders is open
	playlistManagerOpen : boolean;
	// Playlist editor state - the id of the playlist or 0 for a new playlist, -1 means no state assigned
	playlistManagerIndex : number;
	// Playlist
	playlists : IPlaylist[];
	playlistChangeKey : boolean;

	// The index of which playlist that is currently being played
	playlistPlayingIndex : number;
	playingTrackIndex : number;

	// Spotify


}

export enum musicActionTypes {

	// Playlist Manager
	NEW_PLAYLIST = 'music/NEW_PLAYLIST',
	OPEN_PLAYLIST_EDITOR = 'music/OPEN_PLAYLIST_EDITOR',
	CLOSE_PLAYLIST_EDITOR = 'music/CLOSE_PLAYLIST_EDITOR',
	ADD_TO_PLAYLIST = 'music/ADD_TO_PLAYLIST',
	REMOVE_FROM_PLAYLIST = 'music/REMOVE_FROM_PLAYLIST',

	// Playing track
	PAUSE_TRACK = 'music/PAUSE_TRACK',
	PLAY_TRACK = 'music/PLAY_TRACK',
	SKIP_TRACK = 'music/SKIP_TRACK'


}
