import { IPlaylist } from "./music.types";

export const addTracksToPlaylist = (
  playlistArray: IPlaylist[],
  playlistIndex: number,
  tracks: any[]
): IPlaylist => {
  const playlist = playlistArray[playlistIndex];

  playlist.playlistTracks = playlist.playlistTracks.concat(
    formatTracks(tracks)
  );

  playlistArray.splice(playlistIndex, 0, playlist);
  return playlistArray;
};

export const formatTracks = (trackData: string[]) => {
  return trackData.map((track, index) => ({
    trackId: index,
    trackTitle: track,
    path: track,
    src: track,
  }));
};
