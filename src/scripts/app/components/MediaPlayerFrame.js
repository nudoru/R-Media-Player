import React from 'react';
import AppStore from '../stores/AppStore';
import MediaAudioPlayer from './MediaAudioPlayer.js'

require('!style!css!sass!../../../sass/components/MediaPlayerFrame.sass');

export default class MediaPlayerFrame extends React.Component {

  constructor(props) {
    super(props);
    AppStore.subscribe(this.onStoreChange.bind(this));
    this.state = {};
  }

  // TODO state shouldn't be fetched, need to be passed via props
  onStoreChange() {
    this.setState(AppStore.getState().currentMedia);
  }

  // Scroll it back to the top to view media on selection for mobile
  componentDidUpdate() {
    document.body.scrollTop = 0;
  }

  render() {
    console.log('MP Frame Rendering', this.state);

    // TODO combine return statements
    if (this.state.title) {
      console.log('media', this.state.mediaURL);
      return (
        <div className="mediaPlayerFrame__container">
          <h1>{this.state.title}</h1>
          <h2>{this.state.date}</h2>
            <MediaAudioPlayer mediaData={this.state} />
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      return (
        <div className="mediaPlayerFrame__container">
          <h3>Select an entry from the list to view.</h3>
        </div>
      );
    }


  }
}