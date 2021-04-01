import React from 'react';
import {connect} from "react-redux";
import './home.scss'
import {toggleListMenu} from '../../store/player/player.actions';

// import {NavMenu} from '../ui';
// import {VisualizerContainer} from './../visualizer/VisualizerContainer';
// {this.state.hideNav?
				// 	null
				// 	:
				// 	<NavMenu />
				// }
				// 	 <VisualizerContainer audioContext={this.state.audioCont} trackProps={[{'title' : 'Access','Title' : 'Access', StreamUrl : 'Access.wav', 'ID' : 0}]} selectedTrack={'Access'} hideNav={this._hideNavMenu} exitCallback={this._unselect} />
				

interface IHomePageState {
	hideNav : boolean;
	audioCont : any;

	

}
interface IHomePageProps {
	toggleListMenu : any;
}


class HomePage extends React.Component<IHomePageProps, IHomePageState>{
	constructor(props: IHomePageProps){
	super(props)
		this.state = {
			hideNav : false,
			audioCont : this._setAudioContext()
		}
	}

	// Sets up the audio context 
	public _setAudioContext = () => {
		let context;
	    // @ts-ignore
	    let AudioContext : any = window.AudioContext || window.webkitAudioContext;  
	    if (AudioContext) {
	        context = new AudioContext();
	      }
	   
	    return context
	    
	}

	public onCloseClick = () => {
		alert('asd')
	}

	public onMenuClick = () => {
	
		this.props.toggleListMenu()
	}

	public render(){
		return(
				<div className='home-container'>
					<div className='close-button' onClick={this.onCloseClick}></div>
                    <div className='menu-button' onClick={this.onMenuClick}></div>
				</div>
				);
		
	}

	private _unselect= () => {
	    this._hideNavMenu(false)
	}


	private _hideNavMenu = (onOff : boolean) => {
		// this.setState({
		// 	hideNav : onOff
		// })
		console.log('asdas')
	}
} 

const mapStateToProps = (state: any) => ({

})
 
const mapDispatchToProps = {
	toggleListMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
