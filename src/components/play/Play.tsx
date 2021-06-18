import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AudioPlayer from '../audioPlayer/AudioPlayer';
import {IPlaylist} from '../../store/music/music.actions';

interface IPlayProps {
  playlists : state.music.playlists,
  playlistPlayingIndex   : state.music.playlistPlayingIndex,
  playingTrackIndex : state.music.playingTrackIndex
}


const Play: React.FunctionComponent<IPlayProps> = (props) => {

      const [trackList, updateTracklist] = useState([])


      // Sets up the audio context
      const _setAudioContext = () => {
        let context;
          // @ts-ignore
          let AudioContext : any = window.AudioContext || window.webkitAudioContext;
          if (AudioContext) {
              context = new AudioContext();
            }

          return context

      }




      // On Mount set the tracklist to the tracks from the correct playlist in redux
    useEffect(() => {
      if(props.playlistPlayingIndex !== -1){
        console.log(props.playlists[props.playlistPlayingIndex]['playlistTracks'])
        updateTracklist(props.playlists[props.playlistPlayingIndex]['playlistTracks'])
      }

    }, [])

		return(
				<div>
					<h1>Play</h1>
          {
            props.playlistPlayingIndex !== -1 && trackList.length > 0 ?

            <AudioPlayer isLight={false} audioContext={_setAudioContext()} audioFiles={trackList}  currentTrackIndex={props.playingTrackIndex}/>
            :

            null
          }

				</div>
				);

}

//

const mapStateToProps = (state: any) => ({
  playlists : state.music.playlists,
  playlistPlayingIndex   : state.music.playlistPlayingIndex,
  playingTrackIndex : state.music.playingTrackIndex,
  playlistChangeKey : state.music.playlistChangeKey
})

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
