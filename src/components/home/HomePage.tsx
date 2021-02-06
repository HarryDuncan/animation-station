import React from 'react';
import {connect} from "react-redux";
import {NavMenu} from '../ui';
import {VisualizerContainer} from './../visualizer/VisualizerContainer';


interface IHomePageState {
	hideNav : boolean;
	audioCont : any;
}
interface IHomePageProps {


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


	public render(){
		return(
				<div>
				{this.state.hideNav?
					null
					:
					<NavMenu />
				}
					 <VisualizerContainer audioContext={this.state.audioCont} trackProps={[{'title' : 'Access','Title' : 'Access', StreamUrl : 'Access.wav', 'ID' : 0}]} selectedTrack={'Access'} hideNav={this._hideNavMenu} exitCallback={this._unselect} />
				
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
	
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
