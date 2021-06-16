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


interface ILandingPageProps {
	toggleListMenu : any;
	closeList : any;
	key: string|null;
	trackList : any[];
}






const LandingPage: React.FunctionComponent<ILandingPageProps> = (props) => {


		return(
				<div className='home-container'>
					<h1>Get Started</h1>
				</div>
				);

}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
