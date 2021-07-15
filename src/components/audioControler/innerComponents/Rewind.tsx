import React from 'react';
import {HoverableIcon} from './HoverableIcon'


interface IRewindProps{
  handleRewind : () => void;
}

export const Rewind  : React.FunctionComponent<IRewindProps> = (props) => {

  return (
    <div
      id="rewind"
      className={'above-visualizer'}
      onClick={props.handleRewind}>
      <HoverableIcon iconName={'rewind'} />
    </div>
  )
}
