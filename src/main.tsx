import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


// Containers
import {LandingContainer} from './containers/landing/LandingContainer';
import {LiveContainer} from './containers/live/LiveContainer';
import {PlayContainer} from './containers/play/PlayContainer';

// Components
import NavMenu from './components/navigation/NavMenu';
import PlaylistEditor from './components/playlistEditor/PlaylistEditor';
// Styles
import './styles/globalStyles.scss';


interface IAppProps {

}

interface IAppState {
  loadingSite : boolean;
}




export class Main extends React.Component<IAppProps, IAppState> {
  constructor(props : IAppProps){
    super(props);
    this.state ={

    loadingSite : true,
   }
  }


  public _navItemClicked = (navItemString : string) => {
    console.log(navItemString)
  }

    public render(){
        return (
          <div className="App">
              <NavMenu itemClickedCallback={this._navItemClicked} />
              <Switch>
                  <Route exact path="/play"  component={PlayContainer} />
                  <Route exact path="/live"  component={LiveContainer} />
                  <Route exact path="/"  component={LandingContainer} />
              </Switch>
            </div>
          );
      }
}

const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
