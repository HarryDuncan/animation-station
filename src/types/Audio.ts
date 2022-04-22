export interface ITrack {
  trackTitle: string;
  trackId: number;
  src: any;
  trackPath?: string;
  trackType?: string;
}

export interface IPlaylist {
  playlistId: number;
  playlistTitle: string;

  playlistTracks: ITrack[];
  saved: boolean;
}

export interface IMusicState {
  // Importing tracks
  // If the menu for selecting tracks or folders is open
  playlistManagerOpen: boolean;
  // Playlist editor state - the id of the playlist or 0 for a new playlist, -1 means no state assigned
  playlistManagerIndex: number;
  // Playlist
  playlists: IPlaylist[];
  playlistChangeKey: boolean;

  // The index of which playlist that is currently being played
  playlistPlayingIndex: number;
  playingTrackIndex: number;

  // Spotify
}
