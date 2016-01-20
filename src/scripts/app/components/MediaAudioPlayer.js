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
      url    : null,
      playing: false,
      played : 0,
      loaded : 0
    };
  }

  // Seek to position on progress bar click
  onProgressClick(e) {
    let barWidth       = e.currentTarget.offsetWidth,
        parentPosition = this.getPosition(e.currentTarget),
        barClickPos    = e.clientX - parentPosition.x,
        seekPos        = (barClickPos / barWidth);
    this.refs.player.seekTo(seekPos);
  }

  // Calculate the x and y positions of the client event on an element
  getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    return {x: xPosition, y: yPosition};
  }

  onPlayPauseClick() {
    console.log('play pause');
    this.setState({playing: !this.state.playing});
  }

  onProgress(state) {
    this.setState(state);
  }

  play() {
    this.setState({playing: true});
  }

  stop() {
    this.setState({playing: false});
  }

  //<progress max={1} value={this.state.played}/>
  //(this.state.played*100)
  //<button onClick={this.onPlayPauseClick.bind(this)}>{this.state.playing ? 'Pause' : 'Play'}</button>
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
              onClick={this.onPlayPauseClick.bind(this)}>
              <div
                className={this.state.playing ? 'mediaPlayer__icon-pause' : 'mediaPlayer__icon-play'}></div>
            </button>
            <div className="mediaPlayer__progress"
                 onClick={this.onProgressClick.bind(this)}>
              <span style={{width: (this.state.played*100)+'%'}}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}