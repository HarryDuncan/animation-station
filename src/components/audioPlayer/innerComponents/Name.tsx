import React from 'react';



interface INameProps{
  hideSeeking : any;
  setNameDisplayRef : any;
  scrollMarquee : any;
  scrollMarqueeFunc : any;
  scrollStyle : any;
  artist : any;
  title : any;
  width : any;
}


export const Name : React.FunctionComponent<INameProps> = (props) => { 

  return (
    <div
      className={"track-name above-visualizer"}
     
      ref={props.setNameDisplayRef}
      onMouseOver={props.scrollMarquee
      ? e => props.scrollMarqueeFunc(e, 'left')
      : null}
      onMouseOut={props.scrollMarquee
      ? e => props.scrollMarqueeFunc(e, 'right')
      : null}>
      <div className="marquee" style={props.scrollStyle}>
        {props.artist
          ? (`${props.artist} - `)
          : null
        }
        {props.title}
      </div>
    </div>
  )
}
