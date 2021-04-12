import React from 'react';

interface IRewindProps{
  handleHoverOver : any;
  handleHoverOut : any;
  handleRewind : any;
  rewindHover : any;
  rewindHoverIcon : any;
  rewindIcon : any;
  iconSize : any;
}

export const Rewind  : React.FunctionComponent<IRewindProps> = (props) => { 

  return (
    <div
      id="rewind"
       className={'above-visualizer'}
      onMouseOver={e => props.handleHoverOver(e, 'rewind')}
      onMouseLeave={e => props.handleHoverOut(e, 'rewind')}
      onClick={props.handleRewind}>
      <img
        className="player-img"
        id="rewind-icon"
        src={props.rewindHover
        ? props.rewindHoverIcon
        : props.rewindIcon}
        style={{
        height: props.iconSize
      }}/>
    </div>
  )
}
