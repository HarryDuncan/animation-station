import React from 'react';




interface IPlayProps{
  playing : any;
  handlePause : any;
  handlePlay : any;
  handleHoverOver : any;
  handleHoverOut : any;
  iconSize : any;
  renderPlayIcon : any;
}

export const Play : React.FunctionComponent<IPlayProps> = (props) => { 

  return (
    <div
      id="play"
      className={'above-visualizer'}
      onClick={props.playing? props.handlePause : props.handlePlay}
      onMouseOver={e => props.handleHoverOver(e, 'play')}
      onMouseLeave={e => props.handleHoverOut(e, 'play')}>
      <img
        className="player-img"
        id="play-icon"
        style={{
          height: props.iconSize
        }}
        src={props.renderPlayIcon()}/>
    </div>
  )
}


