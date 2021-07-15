import React from 'react';
import {useState} from 'react';
import { Slider, ISliderStyles } from 'office-ui-fabric-react/lib/Slider';
import { DefaultButton,DirectionalHint, Callout, Link, getTheme, FontWeights, mergeStyleSets, Text } from 'office-ui-fabric-react';
import { IStackTokens, Stack, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import {HoverableIcon} from './HoverableIcon'
const stackStyles: Partial<IStackStyles> = { root: { height: 100 } };
const SliderStyles : Partial<ISliderStyles> = {root : {margin : 0}, container : {margin: 0}, valueLabel : {display : 'none'}};
const theme = getTheme();
const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: 'top',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 100px',
    minWidth: 130,
    height: 32,
  },
  callout: {
    maxWidth: 50,
    height : 100,
  },

  title: [
    theme.fonts.xLarge,
    {
      margin: 0,
      fontWeight: FontWeights.semilight,
    },
  ],
  inner: {
    height: '100%',
    margin : 0,
    padding : 0,

  },

});

interface IVolumeProps {

  handleMute : () => void;
  handleVolume : (newVolume : number) => void;

  hideSeeking : any;

  sliderClass : any;
  volume : number;

  width : any;
}

export const Volume : React.FunctionComponent<IVolumeProps> = (props) => {
  const [isCalloutVisible, toggleIsCalloutVisible] = useState(false);

  // const labelId: string = useId('callout-label');
  // const descriptionId: string = useId('callout-description');


  // Showing and hiding the volume bar.
  const handleHoverOver = () => {

    toggleIsCalloutVisible(true)
  }

  const handleHoverOut = () => {

    toggleIsCalloutVisible(false)
  }

  const handleChange = (value : number) => {
    console.log(`${value} handleing change`)
  }


  return (
    <>
    <div className="volume above-visualizer" onMouseOver={handleHoverOver}>



      <HoverableIcon iconName={'volume'} onClick={props.handleMute}/>



      {isCalloutVisible && (
        <Callout
          className={styles.callout}
          role="alertdialog"
          onMouseOver={handleHoverOver}
          gapSpace={0}
          target={`.volume`}
          onDismiss={ handleHoverOut }

           directionalHint={DirectionalHint.topCenter}

        >
         <div className={styles.inner}>
        <Stack horizontal styles={stackStyles}>

           <Slider
            max={100}
            value={props.volume}
            vertical
            styles={SliderStyles}
            onChange={props.handleVolume}/>
         </Stack>
         </div>
        </Callout>
        )}
    </div>
    </>
  )
}
