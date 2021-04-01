import React, { Component } from 'react';
import {connect} from 'react-redux';
// import ListActions from '../actions/list';
// import MusicActions from '../actions/music';

import SortableList from './SortableList';
import './List.scss'

const KEYCODE_ESC = 27;



interface IListMenuProps{

}
interface IListMenuState{

}

class ListMenu extends React.Component<IListMenuProps, IListMenuState>{
  constructor(props : IListMenuProps) {
    super(props);
    this.onOpenList = this.onOpenList.bind(this);
    this.onCloseList = this.onCloseList.bind(this);
    this.onListUpdate = this.onListUpdate.bind(this);
    this.onBackButtonClicked = this.onBackButtonClicked.bind(this);
    this.onRubbishButtonClicked = this.onRubbishButtonClicked.bind(this);
    this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
    this.onPauseButtonClick = this.onPauseButtonClick.bind(this);
    this.onListReorder = this.onListReorder.bind(this);
    this.onSongPlaying = this.onSongPlaying.bind(this);
    this.onSongStopped = this.onSongStopped.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.state = {
      opened: false,
      list: store.getList(),
      draggingIndex: null,
      draggingFilesOver: false,
      selectedItems: [],
      songPlaying: null
    };
  }

  public componentDidMount() {
    // store.on(OPEN_LIST, this.onOpenList);
    // store.on(CLOSE_LIST, this.onCloseList);
    // store.on(LIST_UPDATE, this.onListUpdate);
    // store.on(STARTED_PLAYING, this.onSongPlaying);
    // store.on(STOPPED_PLAYING, this.onSongStopped);
    // document.addEventListener('keyup', this.onKeyUp);
  }

  public componentWillUnmount() {
    // store.removeListener(OPEN_LIST, this.onOpenList);
    // store.removeListener(CLOSE_LIST, this.onCloseList);
    // store.removeListener(LIST_UPDATE, this.onListUpdate);
    // store.removeListener(STARTED_PLAYING, this.onSongPlaying);
    // store.removeListener(STOPPED_PLAYING, this.onSongStopped);
    // document.removeEventListener('keyup', this.onKeyUp);
  }

  public onOpenList() {
    this.setState({
      opened: true
    });
  }

  public onCloseList() {
    this.setState({
      opened: false
    });
  }

  public onListUpdate() {
    this.setState({
      list: store.getList()
    });
  }

  public onSongPlaying() {
    this.setState({
      songPlaying: store.getSongPlaying()
    });
  }

  public onSongStopped() {
    this.setState({
      songPlaying: null
    });
  }

  public onKeyUp(e) {
    if (this.state.opened && e.keyCode === KEYCODE_ESC) {
      ListActions.closeList();
    }
  }

  public onBackButtonClicked() {
    ListActions.closeList();
  }

  public onRubbishButtonClicked() {
    if (!this.state.selectedItems) {
      return;
    }
    ListActions.removeFromList(this.state.selectedItems);
    this.setState({
      selectedItems: []
    });
  }

  public onPlayButtonClick(file) {
    MusicActions.playSong(file);
  }

  public onPauseButtonClick() {
    MusicActions.pauseSong();
  }

  public onListReorder(newList) {
    ListActions.reorderedList(newList);
  }

  public toggleItem(file) {
    const selectedItems = this.state.selectedItems;
    const index = selectedItems.indexOf(file.id);
    if (index > -1) {
      selectedItems.splice(index, 1);
    } else {
      selectedItems.push(file.id);
    }
    this.setState({
      selectedItems
    });
  }

  public render() {
    let className = 'menuList';
    let rubbishButtonClassName = styles.rubbishButton;
    if (this.state.opened) {
      className += ' is-opened';
    }
    if (this.state.selectedItems.length) {
      rubbishButtonClassName += ` ${styles['is-active']}`;
    }
    return (
      <div className={ className }>
        <div className={ styles.backButton } onClick={ this.onBackButtonClicked }></div>
        <div className={ rubbishButtonClassName } onClick={ this.onRubbishButtonClicked }></div>
        { this.renderList() }
      </div>
    );
  }

  renderList() {
    return (
      <SortableList
          onListReorder={ this.onListReorder }
          onPlayButtonClick={ this.onPlayButtonClick }
          onPauseButtonClick={ this.onPauseButtonClick }
          toggleItem={ this.toggleItem }
          selectedItems={ this.state.selectedItems }
          songPlaying={ this.state.songPlaying }
          data={ this.state.list }
      />
    );
  }
}


const mapStateToProps = (state: any) => ({

})
 
const mapDispatchToProps = {
 
};


export default connect(mapStateToProps, mapDispatchToProps)(ListMenu)