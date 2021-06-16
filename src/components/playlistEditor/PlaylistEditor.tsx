import * as React from 'react';
import {useState} from 'react';
import {connect} from "react-redux";


// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
// import { Link } from 'office-ui-fabric-react/lib/Link';
// import { IColumn} from 'office-ui-fabric-react/lib/DetailsList';


import {togglePlaylistEditor} from '../../store/music/music.actions';


//
// const TrackListColumns : IColumn[] = [
//           {
//                 key: 'ID',
//                 name: '#',
//                 fieldName: 'ID',
//
//                 maxWidth: 80,
//                 data: 'number',
//                 isPadded: true,
//
//           },
//           {
//               key: 'Title',
//               name: 'Title',
//               fieldName: 'Title',
//               minWidth: 210,
//               maxWidth: 350,
//               data: 'string',
//
//           },
//           {
//             key: 'Artist',
//             name: 'Artist',
//             fieldName: 'Artist',
//             minWidth: 210,
//             maxWidth: 350,
//             data: 'string',
//           },
//
//           {
//             key: 'Time',
//             name: 'Time',
//             fieldName: 'Time',
//             minWidth: 210,
//             maxWidth: 350,
//             data: 'string',
//           }
//         ]

interface IPlaylistEditorProps{
  headerTitle : string;
  playlistEditorOpen: boolean;

  toggleListMenu : any;


}

const PlaylistEditor: React.FunctionComponent<IPlaylistEditorProps> = props => {


  const [isOpen, toggleOpen] = useState(props.playlistEditorOpen);


  const closePanel = () => {
    toggleOpen(false)
    props.togglePlaylistEditor()
    }


  return (
    <div>

      <Panel
        isOpen={isOpen}
        onDismiss={closePanel}
        type={PanelType.medium}
        lightDismiss={true}
        closeButtonAriaLabel="Close"
        headerText="Add Tracks"
      >

      <h2>hsdsajh</h2>

      </Panel>
    </div>
  );
};


const mapStateToProps = (state: any) => ({

})

const mapDispatchToProps = {
  togglePlaylistEditor
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistEditor);
