import React from 'react';
import {connect} from "react-redux";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 'auto',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};


interface IPlayProps {

}






const Play: React.FunctionComponent<IPlayProps> = (props) => {


		return(
				<div className='home-container'>
					<h1>Play</h1>
				</div>
				);

}

const mapStateToProps = (state: any) => ({
	trackList : state.musicPlayer.trackList
})

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Play);
