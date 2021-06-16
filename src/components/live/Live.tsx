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


interface ILiveProps {

}






const Live: React.FunctionComponent<ILiveProps> = (props) => {


		return(
				<div className='home-container'>
					<h1>Live</h1>
				</div>
				);

}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Live);
