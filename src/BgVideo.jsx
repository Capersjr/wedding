import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './BgVideo.css';


class BgVideo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      videoId: props.videoId,
      volume: props.volume,
      volumeMuted: props.volumeMuted,
      volumeIcon: props.volume,
      isSoundMuted: false,
      opts: {
          height: props.height,
          width: props.width,
          playerVars: {
            autoplay: 1, // Auto-play the video on load
            controls: 0, // Show pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            loop: 1, // Run the video in a loop
            fs: 0, // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3, // Hide the Video Annotations
            autohide: 0, // Hide video controls when playing
            rel: 0 // show related videos when playback ends
          }
      }
    };

    this.toggleSound = this.toggleSound.bind(this);
    this._onReady = this._onReady.bind(this);
  }

  toggleSound() {
    var player = this.refs.player.internalPlayer;

    var volumeIcon;
    if (this.state.isSoundMuted) {
        player.unMute();
        volumeIcon = this.state.volume;
    } else {
        player.mute();
        volumeIcon = this.state.volumeMuted;
    }

    this.setState(prevState => ({
      volumeIcon: volumeIcon,
      isSoundMuted: !prevState.isSoundMuted
    }));
  }

  render() {
    return (
      <div>
        <div className="bg-video">
          <YouTube id="bg-video-player" videoId={this.state.videoId} opts={this.state.opts} onReady={this._onReady} ref="player"/>
        </div>
        <div className="bg-video-controls">
          <img src={this.state.volumeIcon} alt="Mute Button" height="35px" width="35px" onClick={this.toggleSound} />
        </div>
      </div>
    );
  }

  _onReady(event) {
    event.target.unMute();
    event.target.setLoop(true);
  }
}

export default BgVideo;