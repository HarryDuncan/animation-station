import React , {useState, useEffect} from 'react';
import icons from '../assets/index';



interface IHoverableIconProps{
  iconName : string;
  iconSize ?: any;
}

export const HoverableIcon : React.FunctionComponent<IHoverableIconProps> = (props) => {

  const [iconSrc, setIconSrc] = useState(null)
  const [isHovered, setHovered] = useState(false)



  useEffect(() => {
    setIconSrc(_renderIcon())
  }, [isHovered])

  // #################
  // Hover Effects
  // ##################

  const _handleHoverOver = (e : any) => {
    setHovered(true)
  }

  const _handleHoverOut = (e : any) => {
    setHovered(false)
  }




  // muteIcon : ,
  // muteEngagedIcon : icons.muteEngagedIcon,
  // forwardIcon : icons.forwardIcon,
  // forwardHoverIcon : icons.forwardHoverIcon,
  // rewindIcon : icons.rewindIcon,
  // rewindHoverIcon : icons.rewindHoverIcon,
  // loopIcon : icons.loopIcon,
  // loopEngagedIcon : icons.loopEngagedIcon,
  const _renderIcon = () => {
    switch(props.iconName){
      case 'play':
        return isHovered? icons.playHoverIcon : icons.playIcon
      case 'pause':
        return isHovered ? icons.pauseHoverIcon : icons.pauseIcon
      case 'rewind':
        return isHovered ? icons.rewindHoverIcon : icons.rewindIcon
      case 'forward':
        return isHovered ? icons.forwardHoverIcon : icons.forwardIcon
      case 'volume':
        return isHovered ? icons.volumeHoverIcon : icons.volumeIcon
      case 'mute':
        return icons.muteIcon
      default:
        return icons.playIcon
    }
  }
  const _setId = () => {
    return `${props.iconName}-icon`
  }

  const _setClassName = () => {
    return `${props.iconName}-img`
  }




  return (
      <img
        className={_setClassName()}
        id={_setId()}
        onMouseOver={_handleHoverOver}
        onMouseLeave={_handleHoverOut}
        style={{
          height: props.iconSize? props.iconSize : 24
        }}
        src={iconSrc}/>

  )
}
