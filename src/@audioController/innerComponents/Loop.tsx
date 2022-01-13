import React from 'react';

interface ILoopProps{
  handleHoverOver : any;
  handleHoverOut : any;
  iconSize : any;
  handleLoop : any;
  loopIcon : any;
  loopEngagedIcon : any;
  loopHover : any;
  loop : any;
}

export const Loop : React.FunctionComponent<ILoopProps> = (props) => { 

  return (
    <div
      id="loop"
       className={'above-visualizer'}
      onMouseOver={e => props.handleHoverOver(e, 'loop')}
      onMouseLeave={e => props.handleHoverOut(e, 'loop')}
      onClick={props.handleLoop}>
      <img
        className="player-img"
        id="loop-icon"
        src={props.loopHover
        ? props.loop
          ? props.loopIcon
          : props.loopEngagedIcon
        : props.loop
          ? props.loopEngagedIcon
          : props.loopIcon}
        style={{
        height: props.iconSize
      }}/>
    </div>
  )
}

