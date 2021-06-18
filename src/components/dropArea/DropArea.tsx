import React, {useState } from 'react';
import {connect} from "react-redux";
import * as ReadFiles from '../../utils/ReadFiles';
import './DropArea.scss';


interface IDropAreaProps{
  // The elements rendered within the drop area
  children : JSX.Element;
  // Callback - parsing back to parent component
  returnFileCallback : (fileData : any) => void;
  // File restrictions/validations


}



export const DropArea :  React.FunctionComponent<IDropAreaProps> = (props) => {

  const [isHovering, toggleHovering] = useState(false)


  const onDragOut = () => {
    toggleHovering(false)
  }

  const _fileDrop = (e : any ) => {
    e.preventDefault();

    const obj = ReadFiles.separateDirectoriesFromFiles(e.dataTransfer.files);
    let files = obj.files;
    if (obj.directories.length) {
      readFiles.getAllFiles(obj.directories)
               .then(results => {
                 files = files.concat(results);
                 _addFilesToList(files);
               });
    } else {
      _addFilesToList(files);
    }
  }

  const _addFilesToList = (files : any ) => {

    files = ReadFiles.filterFilesByType(files, 'audio');

    props.returnFileCallback(files)

    // if (files.length) {
    //   this.props.addToTrackList(files);
    // }
  }

  const _startDrag = (event : any ) => {
    event.preventDefault();
    toggleHovering(true)
  }


    return (
      <div>
        { props.children }
        <div className={isHovering ? ' messageArea--hover' : ''}>
          <div className={ 'dashedContainer' } onDragOver={_startDrag} onDrop={_fileDrop}>
            Release to add to the list
          </div>
        </div>
      </div>
    );
}
