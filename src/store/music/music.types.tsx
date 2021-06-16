export interface ITrack{
	trackTitle : string;
	trackId : number;
	trackSrc : any;
	trackPath : string;
}


export interface IPlaylist{
	playlistId : number;
	playlistTitle : string;

	playlistTracks : ITrack[];
}



export interface IMusicState{

	// Importing tracks
	// If the menu for selecting tracks or folders is open
	playlistEditorOpen : boolean;
	// Playlist
	playlists : IPlaylist[];



	// Spotify


}

export enum musicActionTypes {

	TOGGLE_PLAYLIST_EDITOR = 'music/TOGGLE_PLAYLIST_EDITOR',

}
