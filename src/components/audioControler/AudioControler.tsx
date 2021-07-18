import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

import IdleTimer from 'react-idle-timer'
import {sanitizeFileName} from './../../utils';
import {Volume, SeekBar, Play, Forward, Rewind, Loop, Name} from './innerComponents'
import functions from "./functions/index";

import { InitControllerRequest, InitControllerResponse, ControlRequest } from "./../../links/audioNode/protos/audioNode_pb"
import { AudioNodeServiceClient} from "./../../links/audioNode/protos/AudioNodeServiceClientPb"

import { CopyRequest } from "./../../links/dockerManager/protos/dockerManager_pb"
import { DockerManagerAudioServiceClient} from "./../../links/dockerManager/protos/DockerManagerServiceClientPb"


//style sheet
import "./audioPlayerStyle.scss";


interface IAudioControlerProps{
  audioFiles : any[];
  currentTrackIndex : number;


  isLight : boolean;
}

const AudioControler: React.FunctionComponent<IAudioControlerProps> = (props) => {

  // ######################
  // state
  // #######################
  const audioNode = new AudioNodeServiceClient('http://localhost:8000/audioNode')
  const manager = new DockerManagerAudioServiceClient('http://localhost:8000/manager')

  const [trackPlaying, toggleTrackPlaying] = useState(false)
  // audio active show/hide the audio controler
  const [audioClassname, setAudioClassname] = useState('active-audio')

  const [currentTrackTitle, updateTrackTitle] = useState('t')


  //SEEKER STATE

  const [seekerVal, updateSeekerVal] = useState(0)
  const [audioDuration, setAudioDuration] = useState(0)
  const [currentAudioTime, updateCurrentAudioTime] = useState(0)

  // Volume for audio - max 100
  const [currentVolume, updateCurrentVolume] = useState(50)
  // ######################
  // USE EFFECTS
  // #######################
  useEffect(() =>{
    let cleanAudioFiles = props.audioFiles.map((item, index) => sanitizeFileName(item['src']))
    let init = new InitControllerRequest();
    init.setAudiofilenamesList(cleanAudioFiles)
    init.setTrackindex(props.currentTrackIndex)


    audioNode.initializeControls(init,{}, function(err, response) {
      console.log(response)

    });
  }, [])



  // ######################
  // COMPONENT METHODS
  // #######################

  // VOLUME METHODS

  const _handleVolume = (newVol : number) => {

  }


  const _handleMute = (event : any) => {

  }


  // SEEK BAR METHODS

  const _handleProgress = () => {

  }

  const _handleSeekSlider = (newSeek : number) => {

  }

  const _handleSeek = (newSeek : number) => {

  }


  const _setTime = (seekTo : number) => {

  }

  const _secondsToClock = (time) => {

  }

  const _loadDuration = () => {

  }

  // PLAY PAUSE METHODS

  const _handlePlayPause = () => {
    // If play
    if(!trackPlaying){
      let playPauseRequest = new ControlRequest()
      playPauseRequest.setAction('play')
      audioNode.playTrack(playPauseRequest,{}, function(err, response) {
        console.log(response)

      });
    }else{
      console.log('pause')
    }

    toggleTrackPlaying(!trackPlaying)
  }

  // REWIND METHODS

  const _handleRewind = () => {

  }

  // FORWARD METHODS

  const _handleForward = () => {

  }

  // Toggles the audio classname based on the idle timer

  const _handleOnActive = () => {
    setAudioClassname('active-audio')
  }

  const _handleOnIdle = () => {
    setAudioClassname('idle-audio')
  }




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
      console.log('asdasd')
    }
    return (
        <div className={"audio-player "} style={_setStyle()}>


            <div className={audioClassname}>
            <div className={"wrapper " + (props.isLight? 'light-screen' : '')}>


            <Rewind handleRewind={_handleRewind} />
            <Play  key={`PlayPauseButton ${trackPlaying}`} playing={trackPlaying} playPause={_handlePlayPause} />
            <Forward endForward={_handleForward} />
            <Volume  handleVolume={_handleVolume} handleMute={_handleMute} volume={currentVolume}/>
            </div>


          </div>
        </div>
      );

}


const mapDispatchToProps = {

}
const mapStateToProps  = (state) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(AudioControler)
