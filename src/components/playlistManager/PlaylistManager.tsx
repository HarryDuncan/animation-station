// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { DropArea } from "../dropArea/DropArea";

// import { useHistory } from "react-router-dom";
// // import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
// import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
// // import { Link } from 'office-ui-fabric-react/lib/Link';
// // import { IColumn} from 'office-ui-fabric-react/lib/DetailsList';

// import {
//   openPlaylistManager,
//   closePlaylistManager,
//   addToPlaylist,
//   removeFromPlaylist,
//   playTrack,
// } from "../../store/music/music.actions";
// import { IPlaylist } from "../../store/music/music.types";
// import { AdvancedDetailsList } from "../AdvancedDetailsList/AdvancedDetailsList";

// interface IPlaylistManagerProps {
//   playlistManagerOpen: boolean;
//   playlists: IPlaylist[];

//   playlistChangeKey: boolean;

//   closePlaylistManager: any;
//   addToPlaylist: any;
//   playTrack: any;
// }

// const PlaylistManager: React.FunctionComponent<IPlaylistManagerProps> = (
//   props
// ) => {
//   const history = useHistory();
//   const [isOpen, toggleOpen] = useState(false);
//   const [playlistItems, updatePlaylistItems] = useState([]);

//   const TrackListColumns: IColumn[] = [
//     {
//       key: "trackId",
//       name: "#",
//       fieldName: "trackId",
//       maxWidth: 30,
//       data: "number",
//       isPadded: true,
//     },
//     {
//       key: "trackId-play",
//       name: "",
//       fieldName: "trackId",
//       minWidth: 210,
//       maxWidth: 350,
//       data: "string",
//       onRender: (item: any) => {
//         return <span onClick={() => _playTrack(item["trackId"])}>Play</span>;
//       },
//     },
//     {
//       key: "Title",
//       name: "Title",
//       fieldName: "trackTitle",
//       minWidth: 210,
//       maxWidth: 350,
//       data: "string",
//     },

//     {
//       key: "Time",
//       name: "Time",
//       fieldName: "Time",
//       minWidth: 210,
//       maxWidth: 350,
//       data: "string",
//     },
//   ];

//   const _playTrack = (trackId: number) => {
//     history.push("/play");
//     // sets history to play
//     props.playTrack(trackId);
//   };
//   const closePanel = () => {
//     toggleOpen(false);
//     props.closePlaylistManager();
//   };

//   const _fileReturned = (file: any) => {
//     // TODO - Validate that file will werk

//     props.addToPlaylist(file);
//   };

//   useEffect(() => {
//     toggleOpen(props.playlistManagerOpen);
//   }, [props.playlistManagerOpen]);

//   // useEffect(() => {
//   //   console.log(props.playlists)
//   // }, [props.PlaylistManagerIndex, props.playlists])

//   return (
//     <>
//       {props.playlistManagerIndex === -1 ? null : (
//         <Panel
//           isOpen={props.playlistManagerOpen}
//           onDismiss={closePanel}
//           type={PanelType.medium}
//           lightDismiss={true}
//           closeButtonAriaLabel="Close"
//           headerText={props.playlists[props.playlistManagerIndex].playlistTitle}
//         >
//           <div>
//             <DropArea returnFileCallback={_fileReturned}>
//               <AdvancedDetailsList
//                 key={`${props.playlistChangeKey} Playlist editor`}
//                 items={
//                   props.playlists[props.playlistManagerIndex]["playlistTracks"]
//                 }
//                 columns={TrackListColumns}
//               />
//             </DropArea>
//           </div>
//         </Panel>
//       )}
//     </>
//   );
// }; //

// const mapStateToProps = (state: any) => ({
//   playlistManagerOpen: state.music.playlistManagerOpen,
//   playlistManagerIndex: state.music.playlistManagerIndex,
//   playlists: state.music.playlists,
//   playlistChangeKey: state.music.playlistChangeKey,
// });

// const mapDispatchToProps = {
//   // Editing/opening playlist
//   openPlaylistManager,
//   closePlaylistManager,
//   addToPlaylist,
//   removeFromPlaylist,

//   // Playpause Track
//   playTrack,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PlaylistManager);
