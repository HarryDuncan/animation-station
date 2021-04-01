import React, { Component } from 'react';
import'./SortableList.scss';
import { Sortable } from 'react-sortable';

interface ISortableListItemProps{
  children : any;

  draggable : any;
  onDragStart : any;
  onDragEnd : any;
  onDragOver : any;
  onTouchStart : any;
  onTouchMove : any;
  onTouchEnd : any;

}

export class SortableListItem extends React.Component<ISortableListProps, {}>{
  constructor(props : ISortableListProps) {
    super();
    this.onPlayButtonClickProxy = this.onPlayButtonClickProxy.bind(this);
    this.onPauseButtonClickProxy = this.onPauseButtonClickProxy.bind(this);
    this.onClickProxy = this.onClickProxy.bind(this);
  }

  public onPlayButtonClickProxy = (e : any) => {
    e.preventDefault();
    e.stopPropagation();
    const position = parseInt(e.target.parentNode.dataset.id, 10);
    if (this.props.children.onPlayButtonClick) {
      this.props.children.onPlayButtonClick.call(null, this.props.children.items[position]);
    }
  }

  public onPauseButtonClickProxy = (e : any ) => {
    e.preventDefault();
    e.stopPropagation();
    const position = parseInt(e.target.parentNode.dataset.id, 10);
    if (this.props.children.onPauseButtonClick) {
      this.props.children.onPauseButtonClick.call(null, this.props.children.items[position]);
    }
  }

  public onClickProxy = (e : any) => {
    const position = parseInt(e.target.parentNode.dataset.id, 10);
    if (this.props.children.onClick) {
      this.props.children.onClick.call(null, this.props.children.items[position]);
    }
  }

  public render() {
    let className = `${styles.item} ListItem__${this.props.children.className}`;
    if (this.props.children.selected) {
      className += ` ${styles['is-selected']}`;
    }
    if (this.props.children.isPlaying) {
      className += ` ${styles['is-playing']}`;
    }

     //  data-id= { this.props['data-id'] }
    return <div
            
              draggable={ this.props.draggable }
              onDragStart={ this.props.onDragStart }
              onDragEnd={ this.props.onDragEnd }
              onDragOver={ this.props.onDragOver }
              onTouchStart={ this.props.onTouchStart }
              onTouchMove={ this.props.onTouchMove }
              onTouchEnd={ this.props.onTouchEnd }
              onClick={ this.onClickProxy }
              className={ className }
          >
            <span className={ styles.itemNumber }></span>
            <span className={ styles.itemName }>{ this.props.children.item.displayName }</span>
            { !this.props.children.isPlaying || this.props.children.isPaused ?
                      <i className={ styles.playButton } onClick={ this.onPlayButtonClickProxy }></i> :
                      <i className={ styles.pauseButton } onClick={ this.onPauseButtonClickProxy }></i>
            }
          </div>;
  }
}

export default Sortable(SortableListItem);