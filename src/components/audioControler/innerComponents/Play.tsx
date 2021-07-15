import React from 'react';
import {useState} from 'react';
import {HoverableIcon} from './HoverableIcon';


interface IPlayProps{
  playing : any;
  playPause : () => void;
}

export const Play : React.FunctionComponent<IPlayProps> = (props) => {


  return (
    <div
      id="play"
      className={'above-visualizer'}
      onClick={props.playPause}>
      <HoverableIcon iconName={props.playing? 'play' : 'pause'} />
    </div>
  )
}
