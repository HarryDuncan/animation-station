import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import IdleTimer from "react-idle-timer";
import { sanitizeFileName } from "../utils";
import { IPlaylist } from "data";
import {
  Volume,
  SeekBar,
  Play,
  Forward,
  Rewind,
  Loop,
  Name,
} from "./innerComponents";
import functions from "./functions/index";

import {
  InitControllerRequest,
  SetUpTrackRequest,
  ControlRequest,
} from "../grpc/protos/audioNode_pb";
import { AudioNodeServiceClient } from "../grpc";

//style sheet
import "./audioPlayerStyle.scss";

interface IAudioControlerProps {
  audioFiles: any[];
  currentTrackIndex: number;

  isLight: boolean;

  playlists: IPlaylist[];
  playlistPlayingIndex: number;
  playingTrackIndex: number;
}

const AudioController: React.FunctionComponent<IAudioControlerProps> = ({
  isLight,
  audioFiles,
  currentTrackIndex,
  playlists,
  playlistPlayingIndex,
  playingTrackIndex,
}) => {
  // ######################
  // state
  // #######################
  const audioNode = new AudioNodeServiceClient(
    "http://localhost:8000/audioNode"
  );
  // const manager = new DockerManagerAudioServiceClient(
  //   "http://localhost:8000/manager"
  // );

  const [trackPlaying, toggleTrackPlaying] = useState(false);
  // audio active show/hide the audio controler
  const [audioClassname, setAudioClassname] = useState("active-audio");

  const [currentTrackTitle, updateTrackTitle] = useState("t");

  //SEEKER STATE

  const [seekerVal, updateSeekerVal] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [currentAudioTime, updateCurrentAudioTime] = useState<number>(0);

  // Volume for audio - max 100
  const [currentVolume, updateCurrentVolume] = useState<number>(50);
  // ######################
  // USE EFFECTS
  // #######################

  useEffect(() => {
    let cleanAudioFiles = audioFiles.map((item, index) =>
      sanitizeFileName(item.src)
    );
    let init = new InitControllerRequest();
    init.setControlrequesttype("tracks");

    audioNode.initializeControls(init, {}, function (err, response) {
      if (err) {
        throw "Error Could Not Connect";
      }
    });
    playNewTrack();
  }, []);

  // ######################
  // COMPONENT METHODS
  // #######################

  // VOLUME METHODS

  const handleVolume = (newVol: number) => {};

  const handleMute = (event: any) => {};

  // SEEK BAR METHODS

  const handleProgress = () => {};

  const handleSeekSlider = (newSeek: number) => {};

  const handleSeek = (newSeek: number) => {};

  const setTime = (seekTo: number) => {};

  const secondsToClock = (time) => {};

  const loadDuration = () => {};

  // PLAY PAUSE METHODS

  const playNewTrack = () => {
    const playRequest = new SetUpTrackRequest();
    playRequest.setTrackindex(playingTrackIndex);
    playRequest.setPlaylistindex(playlistPlayingIndex);

    audioNode.setUpTrack(playRequest, {}, (err, response) => {
      console.log(response);
    });
  };
  const handlePlayPause = () => {
    // If play
    const audioRequest = new ControlRequest();
    if (!trackPlaying) {
      audioRequest.setAction("play");
      let stream = audioNode.playTrack(audioRequest, {});
      stream.on("data", (response: any) => {
        console.log(response);
      });
      toggleTrackPlaying(true);
    } else {
      audioRequest.setAction("pause");
      audioNode.pauseTrack(audioRequest, {}, function (response) {
        console.log(response);
      });
      toggleTrackPlaying(false);
    }
  };

  // REWIND METHODS

  const handleRewind = () => {};

  // FORWARD METHODS

  const handleForward = () => {};

  // Toggles the audio classname based on the idle timer

  const handleOnActive = () => {
    setAudioClassname("active-audio");
  };

  const handleOnIdle = () => {
    setAudioClassname("idle-audio");
  };

  // let title = this.props.audioFiles[this.state.currentTrackIndex].trackTitle;
  // <IdleTimer
  //   ref={ref => { this.idleTimer = ref }}
  //   timeout={1000 * 60 * 0.081}
  //   onActive={_handleOnActive}
  //   onIdle={_handleOnIdle}
  //   onAction={_handleOnActive}
  //   debounce={250}
  // />
  //

  //<Name hideSeeking={false} setNameDisplayRef={this.setNameDisplayRef} scrollMarquee={this.state.scrollMarquee} scrollMarqueeFunc={this.scrollMarqueeFunc}  title={title} width={this.state.nameWidth}/>

  //  <SeekBar seekerVal={seekerVal} handleSeekSlider={_handleSeekSlider} handleSeek={_handleSeek} currentAudioTime={currentAudioTime} duration={audioDuration} />

  //

  //
  const _setStyle = () => {
    console.log("asdasd");
  };
  return (
    <div className={"audio-player "} style={_setStyle()}>
      <div className={audioClassname}>
        <div className={"wrapper " + (isLight ? "light-screen" : "")}>
          <Rewind handleRewind={handleRewind} />
          <Play
            key={`PlayPauseButton ${trackPlaying}`}
            playing={trackPlaying}
            playPause={handlePlayPause}
          />
          <Forward endForward={handleForward} />
          <Volume
            handleVolume={handleVolume}
            handleMute={handleMute}
            volume={currentVolume}
          />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  playlists: state.music.playlists,
  playlistPlayingIndex: state.music.playlistPlayingIndex,
  playingTrackIndex: state.music.playingTrackIndex,
  playlistChangeKey: state.music.playlistChangeKey,
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioController);
