import React from 'react';


interface IForwardProps{
  handleHoverOver : any;
  handleHoverOut : any;
  iconSize : any;
  endPlay : any;
  forwardHover : any;
  forwardIcon : any;
  forwardHoverIcon : any;
}

export const Forward : React.FunctionComponent<IForwardProps> = (props) => { 

  return (
    <div
      id="forward"
      className={'above-visualizer'}
      onMouseOver={e => props.handleHoverOver(e, 'forward')}
      onMouseLeave={e => props.handleHoverOut(e, 'forward')}
      onClick={e => props.endPlay(e, true)}>
      <img
        className="player-img"
        id="forward-icon"
        src={props.forwardHover
        ? props.forwardHoverIcon
        : props.forwardIcon}
        style={{
        height: props.iconSize
      }}/>
    </div>
  )
}

