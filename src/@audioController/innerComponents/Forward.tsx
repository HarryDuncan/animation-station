import React from 'react';
import {HoverableIcon} from './HoverableIcon'


interface IForwardProps{
  handleForward : () => void;
}

export const Forward  : React.FunctionComponent<IForwardProps> = (props) => {

  return (
    <div
      id="forward"
      className={'above-visualizer'}
      onClick={props.handleForward}>
      <HoverableIcon iconName={'forward'} />
    </div>
  )
}
