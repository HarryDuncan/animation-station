import * as React from 'react';
import {useState} from 'react';
import {connect} from "react-redux";
import {toggleListMenu} from '../../store/player/player.actions';
import {SortableList} from '../lists/SortableList';
// import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
// import { Link } from 'office-ui-fabric-react/lib/Link';
import { IColumn} from 'office-ui-fabric-react/lib/DetailsList';
import DropArea from './../dropArea/DropArea';

const TrackListColumns : IColumn[] = [
          {
                key: 'ID',
                name: '#',
                fieldName: 'ID',
             
                maxWidth: 80,
                data: 'number',
                isPadded: true,
               
          },
          {
              key: 'Title',
              name: 'Title',
              fieldName: 'Title',
              minWidth: 210,
              maxWidth: 350,
              data: 'string',
              
          },
          {
            key: 'Artist',
            name: 'Artist',
            fieldName: 'Artist',
            minWidth: 210,
            maxWidth: 350,
            data: 'string',
          },
          
          {
            key: 'Time',
            name: 'Time',
            fieldName: 'Time',
            minWidth: 210,
            maxWidth: 350,
            data: 'string',
          }
        ]

interface ITrackPanelProps{
  listMenuOpen: boolean;
  toggleListMenu : any;
}
// The panel type and description are passed in by the PanelSizesExample component (later in this file)
const TrackPanel: React.FunctionComponent<{ panelType: PanelType; description: string }> = props => {
  const { description, panelType } = props;
  const [isOpen, toggleOpen] = useState(props.listMenuOpen);

 
  const closePanel = () => {
    toggleOpen(false)
    props.toggleListMenu()
    }


  return (
    <div>
 
      <Panel
        isOpen={props.listMenuOpen}
        onDismiss={closePanel}
        type={PanelType.medium}
        lightDismiss={true}
        closeButtonAriaLabel="Close"
        headerText="Add Tracks"
      >
       
        <DropArea>
          <SortableList
            key={props.trackList.length}
            columns={TrackListColumns}
            items={props.trackList}
            />
          </DropArea>
       
      </Panel>
    </div>
  );
};


const mapStateToProps = (state: any) => ({
  trackList : state.musicPlayer.trackList,
  listMenuOpen : state.musicPlayer.listMenuOpen
})
 
const mapDispatchToProps = {
  toggleListMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackPanel);

