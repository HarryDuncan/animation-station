import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

// Containers
import { LandingContainer } from "./containers/landing/LandingContainer";
import { LiveContainer } from "./containers/live/LiveContainer";
import { PlayContainer } from "./containers/play/PlayContainer";

// Components
import NavMenu from "./components/navigation/NavMenu";
import PlaylistManager from "./components/playlistManager/PlaylistManager";

// Redux
import {
  openPlaylistManager,
  setUpPlaylists,
} from "./store/music/music.actions";
import { IPlaylist } from "./store/music/music.types";

// Styles
import "./styles/globalStyles.scss";

// GRPC - stuff
import {
  InitialzeAudioNodeResponse,
  InitializeAudioNodeRequest,
  PlaylistRequest,
} from "./links/audioNode/protos/audioNode_pb";
import { AudioNodeServiceClient } from "./links/audioNode/protos/AudioNodeServiceClientPb";

interface IRootProps {
  setUpPlaylists: any;
  openPlaylistManager: any;
  // Playlists - for the nav
  playlists: IPlaylist[];
  playlistChangeKey: boolean;
}

export const Root: React.FunctionComponent<IRootProps> = ({
  setUpPlaylists,

  openPlaylistManager,
  playlists,
  playlistChangeKey,
}) => {
  const history = useHistory();

  // When a nav item is clicked this is where the actions take place
  const _navItemClicked = (navItemString: string) => {
    switch (navItemString) {
      case "Home":
        history.push("/");
        break;
      case "SoundCloud":
      case "Spotify":
      case "Live":
        break;
      case "new":
        openPlaylistManager("new");
        break;
      default:
        openPlaylistManager(Number(navItemString));
        break;
    }
  };

  const audioNode = new AudioNodeServiceClient(
    "http://localhost:8000/audioNode"
  );

  useEffect(() => {
    const init = new InitializeAudioNodeRequest();
    audioNode.initializeAudioNode(init, {}, (err, response) => {
      if (err) {
        throw "Error Could Not Connect To Audio Node";
      } else {
        // gets the playlists
        const playlists: string[] = response.array[1];
        setUpPlaylists(playlists);

        playlists.forEach((playlist) => {
          const getTracks = new PlaylistRequest();
          getTracks.setPlaylistname(playlist);
          audioNode.sendPlaylists(getTracks, {}, (err, response) => {
            console.log(response);
          });
        });
      }
    });
    // const getPlaylists = new
  }, []);

  return (
    <div className="App">
      <NavMenu
        key={`${playlistChangeKey}  sideNav`}
        itemClickedCallback={_navItemClicked}
        playlistItems={playlists.filter((item) => item.saved === true)}
      />
      <PlaylistManager />
      <Switch>
        <Route exact path="/play" component={PlayContainer} />
        <Route exact path="/live" component={LiveContainer} />
        <Route exact path="/" component={LandingContainer} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  playlists: state.music.playlists,
  playlistChangeKey: state.music.playlistChangeKey,
});

const mapDispatchToProps = {
  openPlaylistManager,
  setUpPlaylists,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
