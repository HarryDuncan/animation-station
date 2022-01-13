import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AudioController from "../@audioController/AudioController";
import { IPlaylist } from "store/music/music.actions";

interface IPlayProps {
  playlists: IPlaylist[];
  playlistPlayingIndex: number;
  playingTrackIndex: number;
  playlistChangeKey: boolean;
}

const Play: React.FunctionComponent<IPlayProps> = (props) => {
  const [trackList, updateTracklist] = useState([]);

  useEffect(() => {
    if (props.playlistPlayingIndex !== -1) {
      updateTracklist(
        props.playlists[props.playlistPlayingIndex]["playlistTracks"]
      );
    }
  }, [props.playlistChangeKey, props.playlistPlayingIndex]);

  // On Mount set the tracklist to the tracks from the correct playlist in redux
  useEffect(() => {
    if (props.playlistPlayingIndex !== -1) {
      updateTracklist(
        props.playlists[props.playlistPlayingIndex]["playlistTracks"]
      );
    }
  }, []);

  return (
    <div>
      <h1>Play</h1>
      {props.playlistPlayingIndex !== -1 && trackList.length > 0 ? (
        <AudioController
          isLight={false}
          key={trackList.length}
          audioFiles={trackList}
          currentTrackIndex={props.playingTrackIndex}
        />
      ) : null}
    </div>
  );
};

//

const mapStateToProps = (state: any) => ({
  playlists: state.music.playlists,
  playlistPlayingIndex: state.music.playlistPlayingIndex,
  playingTrackIndex: state.music.playingTrackIndex,
  playlistChangeKey: state.music.playlistChangeKey,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
