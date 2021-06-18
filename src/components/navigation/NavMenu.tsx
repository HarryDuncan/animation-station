import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav';

// Styles
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 'auto',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};






interface IPlayListItem{
  title : string
}

// NAV Props
interface INavMenuProps{
  // When Item is clicked - callback
  itemClickedCallback : (arg : string) => void;

  playlistItems?: IPlayListItem[]
}




const NavMenu: React.FunctionComponent<INavMenuProps> = (props) => {

  const _generateNavMenuItems = (linkClickCallback : (arg : string) => void,  playlistItems? : IPlayListItem[]) => {


    // Renders the playlost items
    const _renderPlaylistLinks = (playlistItems : IPlayListItem[]) => {
      let linkArr = [{
                      name: 'Add New Playlist',
                      onClick : () => linkClickCallback('new'),
                      key: 'new',
                    }]

      let playlistLinks = playlistItems.map((item, index) => ({name : item.playlistTitle, onClick : () => linkClickCallback(item.playlistId), key : item.playlistId}))

      if(playlistLinks.length > 0 ){
        linkArr = linkArr.concat(playlistLinks)
      }

      return linkArr
    }
    const navLinkGroups: INavLinkGroup[] = [
      {
        links: [
          {
            name: 'Home',
            key: 'Home',
            onClick : () => linkClickCallback('Home')
          },
          {
            name: 'Play Live',
            key: 'Live',
            onClick : () => linkClickCallback('Live')
          },
          {
            name: 'Connect',
            expandAriaLabel: 'Expand Connect section',
            collapseAriaLabel: 'Collapse Connect section',
            links: [
              {
    		        name: 'Connect SoundCloud',
    		        onClick : () => linkClickCallback('SoundCloud'),
    		        key: 'SoundCloud',

    		      },
              {
    		        name: 'Connect Spotify',
    		        onClick : () => linkClickCallback('Spotify'),
    		        key: 'Spotify',

    		      },
            ],
            isExpanded: false,
          },

          {
            name: 'Playlists',
            expandAriaLabel: 'Expand Playlists section',
            collapseAriaLabel: 'Collapse Playlists section',
            links:  _renderPlaylistLinks(playlistItems),
            isExpanded: true,
          },


        ],
      },
    ];

    return navLinkGroups
  }

  return (
    <Nav
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={_generateNavMenuItems(props.itemClickedCallback, props.playlistItems)}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export default NavMenu;
