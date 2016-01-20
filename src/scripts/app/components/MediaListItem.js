import React from 'react';
import AppStore from '../stores/AppStore.js';
import Actions from '../actions/actionCreators.js';

require('!style!css!sass!../../../sass/components/MediaList.sass');

export default class MediaListItem extends React.Component {

  // TODO refactor out of component into Index or App
  onClick(e) {
    AppStore.dispatch(Actions.setMedia(this.props.id));
  }

  /*
   <ul className="mediaList__item-metadata">
   <li>{this.props.type}</li>
   <li>{this.props.duration}</li>
   </ul>
   */
  render() {
    let maxLen        = 140,
        shortenedText = this.props.description;

    // Cap the description length
    if (shortenedText.length > maxLen) {
      shortenedText = shortenedText.substring(0, maxLen) + ' ...';
    }

    return (
      <div className="mediaList__item" onClick={this.onClick.bind(this)}>
        <h1>{this.props.title}</h1>
        <h2>{this.props.date}</h2>
        <p>{shortenedText}</p>
      </div>
    );
  }
}