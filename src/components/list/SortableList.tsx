import React, { Component } from 'react';
import './SortableList.scss';
import SortableListItem from './SortableListItem';


interface ISortableListProps{
  data : any;
  onPlayButtonClick: any;
  onPauseButtonClick: any;
  onClick: any;
  songPlaying: any;
  selectedItems: any;
}

interface ISortableListState{
  draggingIndex : any;
  data : any;
  draggingFilesOver : any;
}
class SortableList extends React.Component<ISortableListProps,ISortableListState>{
    constructor(props: ISortableListProps) {
      super();
    this.state = {
      draggingIndex: null,
      data: props.data,
      draggingFilesOver: false
    };
    this.onStateUpdate = this.onStateUpdate.bind(this);
    this.onDragFilesStart = this.onDragFilesStart.bind(this);
    this.onDragFilesStop = this.onDragFilesStop.bind(this);
  }

  // public componentDidMount = () => {
  //   store.on(DRAGGING_FILES, this.onDragFilesStart);
  //   store.on(NOT_DRAGGING_FILES, this.onDragFilesStop);
  // }

  public componentWillUnmount = () => {
    // store.removeListener(DRAGGING_FILES, this.onDragFilesStart);
    // store.removeListener(NOT_DRAGGING_FILES, this.onDragFilesStop);
  }

  public componentWillReceiveProps = (newProps: any ) => {
    this.setState({
      data: newProps.data
    });
  }

  // onStateUpdate(obj) {
  //   this.setState(obj);
  //   if (obj.data) {
  //     this.onComponentFinishedUpdating(obj.data);
  //   }
  // }

  public onComponentFinishedUpdating = (data) => {
    if (this.props.onListReorder) {
      this.props.onListReorder.call(null, data);
    }
  }

  public onDragFilesStart = () =>  {
    this.setState({
      draggingFilesOver: true
    });
  }

  public onDragFilesStop = () => {
    this.setState({
      draggingFilesOver: false
    });
  }

  public render() {
    let className = styles.container;
    if (this.state.draggingFilesOver) {
      className += ` ${styles['has-filesOver']}`;
    }
    const listItems = this.state.data.map((item, i) => {
      return (
          <SortableListItem
              key={ i }
              updateState={ this.onStateUpdate }
              items={ this.state.data }
              draggingIndex={ this.state.draggingIndex }
              sortId={ i }
              outline="list"
            >{{ // We need to add it to the children so that react-sortable passes it down to our component
              className: i % 2 === 0 ? 'is-even' : 'is-odd',
              onPlayButtonClick: this.props.onPlayButtonClick,
              onPauseButtonClick: this.props.onPauseButtonClick,
              onClick: this.props.toggleItem,
              isPlaying: this.props.songPlaying && this.props.songPlaying.id === item.id,
              isPaused: this.props.songPlaying && this.props.songPlaying.paused,
              selected: this.props.selectedItems.indexOf(item.id) > -1,
              items: this.state.data,
              item
            }}</SortableListItem>
      );
    }, this);

    return (
          <div className={ className }>{ listItems }</div>
    );
  }
}

export default SortableList;