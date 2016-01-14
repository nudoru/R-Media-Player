import React from 'react';
//import AppStore from '../stores/AppStore.js';
//import Actions from '../actions/actionCreators.js';
import ReactPlayer from 'react-player';

require('!style!css!sass!../../../sass/components/MediaAudioPlayer.sass');

//https://github.com/CookPete/react-player/blob/master/src/demo/App.js

export default class MediaAudioPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url:     null,
      playing: false,
      played:  0,
      loaded:  0
    };
  }

  onPlayPauseClick() {
    console.log('play pause');
    this.setState({playing: !this.state.playing});
  }

  onProgress(state) {
    this.setState(state);
  }

  play() {
    this.setState({playing: true})
  }

  stop() {
    this.setState({playing: false})
  }

  render() {
    return (
      <div className="mediaPlayer__container">
        <ReactPlayer
          width={1}
          height={1}
          url={this.props.mediaData.mediaURL}
          playing={this.state.playing}
          ref='player'
          className='react-player'
          onPlay={this.play.bind(this)}
          onPause={this.stop.bind(this)}
          onBuffer={() => console.log('onBuffer')}
          onEnded={this.stop.bind(this)}
          onProgress={this.onProgress.bind(this)}
        />



        <div className="mediaPlayer__image-container">
          <img className="mediaPlayer__image"
               src={this.props.mediaData.playingImage}/>
          <div className="mediaPlayer__ui-frame">
            <button
              onClick={this.onPlayPauseClick.bind(this)}>{this.state.playing ? 'Pause' : 'Play'}</button>
            <progress max={1} value={this.state.played}/>
          </div>
        </div>
      </div>
    );
  }
}