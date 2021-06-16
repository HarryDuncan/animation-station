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



//
// public _onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
// 		switch(item['key']){
// 			case 'Add Tracks':
// 				this.props.toggleListMenu()
// 				break;
// 			default:
// 				console.log('asdas')
// 		}
// 		this.setState({
// 			key : item['key']
// 		})
// 	}
// 	public render(){
// 		const navLinkGroups: INavLink[] = [
// 			  {
// 			    links: [
//
// 			      {
// 			        name: 'Add Tracks',
// 			       	onClick : console.log('asdasd'),
// 			        key: 'Add Tracks',
// 			      },
// 			      {
// 			        name: 'Create Playlist',
// 			       	onClick :  console.log('asdasd'),
// 			        key: 'Create Playlist'
// 			      },
// 			      {
// 			        name: 'Connect Input',
// 			        onClick : console.log('asdasd'),
// 			        key: 'Input',
//
// 			      },
//
// 			    ],
// 			  },
// 			];







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

  const _generateNavMenuItems = (linkClickCallback : (arg : string) => void,  playlistItems? : IPlayListItem) => {
    const navLinkGroups: INavLinkGroup[] = [
      {
        links: [
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
            links: [
              {
                name: 'Add New Playlist',
                onClick : () => linkClickCallback('new'),
                key: '',

              },
            ],
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
      groups={_generateNavMenuItems(props.itemClickedCallback)}
    />
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export default NavMenu;
