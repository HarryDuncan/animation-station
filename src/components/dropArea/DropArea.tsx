import React, { Component } from 'react';
import {connect} from "react-redux";
import * as ReadFiles from '../../utils/ReadFiles';
import {addToTrackList} from './../../store/player/player.actions';
import './DropArea.scss';


// import DropAreaActions from '../actions/dropArea';




interface IDropAreaProps{
  addToTrackList : any;
}

interface IDropAreaState{
  hover : boolean;
}

class DropArea extends React.Component<IDropAreaProps, IDropAreaState>{
  constructor(props : IDropAreaProps) {
    super();
    this.state = {
      hover: false
    };
  }

  



  public onDragOut = () => {
   // DropAreaActions.stopDraggingFiles();
    this.setState({
      hover: false
    });
  }

  public fileDrop = (e : any ) => {
    e.preventDefault();
    
    const obj = ReadFiles.separateDirectoriesFromFiles(e.dataTransfer.files);
    let files = obj.files;
    if (obj.directories.length) {
      readFiles.getAllFiles(obj.directories)
               .then(results => {
                 files = files.concat(results);
                 this.addFilesToList(files);
               });
    } else {
      this.addFilesToList(files);
    }
  }

  public addFilesToList = (files : any ) => {
   
    files = ReadFiles.filterFilesByType(files, 'audio');

    if (files.length) {
      this.props.addToTrackList(files);
    }
  }

  public startDrag = (event : any ) => {
     event.preventDefault();
    this.setState({
        hover: true
      });
  }

  public render = () => {
    return (
      <div>
        { this.props.children }
        <div className={this.state.hover ? ' messageArea--hover' : ''}>
          <div className={ 'dashedContainer' } onDragOver={this.startDrag} onDrop={this.fileDrop}>
            Release to add to the list
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({

})
 
const mapDispatchToProps = {
  addToTrackList
};

export default connect(mapStateToProps, mapDispatchToProps)(DropArea);