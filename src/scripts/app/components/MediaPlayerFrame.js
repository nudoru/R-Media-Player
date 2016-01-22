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
    this.refs.mediaPlayer.stop();
  }

  onMaterialsClick() {
    let win = window.open(this.state.material);
  }

  render() {
    // TODO combine return statements
    if (this.state.title) {
      let materialsButtons;
      if (this.state.material) {
        materialsButtons = <div className="text-center margin-bottom-double">
          <button onClick={this.onMaterialsClick.bind(this)}
                  className="nuButton">Download Materials
          </button>
        </div>;
      }

      return (
        <div className="mediaPlayerFrame__container">
          <h1>{this.state.title}</h1>
          <h2>{this.state.date}</h2>
          <MediaAudioPlayer ref="mediaPlayer" mediaData={this.state}/>
          {materialsButtons}
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      // Setting innerhtml https://facebook.github.io/react/docs/jsx-gotchas.html
      return (
        <div className="mediaPlayerFrame__container"
             dangerouslySetInnerHTML={{__html: AppStore.getState().config.introduction}}>
        </div>
      );
    }
  }
}