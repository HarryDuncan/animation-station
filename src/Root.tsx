import React from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom'

// Containers
import {LandingContainer} from './containers/landing/LandingContainer';
import {LiveContainer} from './containers/live/LiveContainer';
import {PlayContainer} from './containers/play/PlayContainer';

// Components
import NavMenu from './components/navigation/NavMenu';
import PlaylistManager from './components/playlistManager/PlaylistManager';

// Redux
import {openPlaylistManager} from './store/music/music.actions';
import {IPlaylist} from './store/music/music.types';

// Styles
import './styles/globalStyles.scss';


interface IRootProps {
  togglePlaylistManager : any;

  // Playlists - for the nav
  playlists : IPlaylist[]
  playlistChangeKey : boolean;
}




export const Root: React.FunctionComponent<IootProps> = (props) =>  {
  const history = useHistory()



  // When a nav item is clicked this is where the actions take place
  const _navItemClicked = (navItemString : string) => {
    switch(navItemString){
      case 'Home':
        history.push('/')
        break;
      case 'SoundCloud':
      case 'Spotify':
      case 'Live':
        break;
      case 'new':
        props.openPlaylistManager('new')
        break;
      default:
        props.openPlaylistManager(Number(navItemString))
        break;
    }
  }


      return (
        <div className="App">
            <NavMenu key={`${props.playlistChangeKey}  sideNav`}  itemClickedCallback={_navItemClicked} playlistItems={props.playlists.filter(item => (item['saved'] === true))}/>
            <PlaylistManager />
            <Switch>
                <Route exact path="/play"  component={PlayContainer} />
                <Route exact path="/live"  component={LiveContainer} />
                <Route exact path="/"  component={LandingContainer} />
            </Switch>
          </div>
        );

}

const mapStateToProps = (state: any) => ({
    playlists : state.music.playlists,
    playlistChangeKey : state.music.playlistChangeKey
})

const mapDispatchToProps = {
  openPlaylistManager
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
