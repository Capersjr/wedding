import React, { Component } from 'react';
import './BgVideo.css';


class BgVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video_mp4: props.videoMp4,
      poster: props.posterUrl,
      volume: props.volume,
      volumeMuted: props.volumeMuted,
      volumeIcon: props.volume,
      isSoundMuted: false};

    this.toggleSound = this.toggleSound.bind(this);
  }

  toggleSound() {
    this.setState(prevState => ({
      isSoundMuted : !prevState.isSoundMuted
    }));

    var bgVideo = this.refs.bgVideoPlayer;
    bgVideo.muted = this.state.isSoundMuted;

    var volumeIcon;
    if (this.state.isSoundMuted === true) {
      volumeIcon = this.state.volume;
    } else {
      volumeIcon = this.state.volumeMuted;
    }
    this.setState(prevState => ({
      volumeIcon: volumeIcon
    }));

  }

  render() {
    return (
      <div>
        <div className="bg-video">
          <video id="bg-video" autoPlay muted loop poster={this.state.poster} ref="bgVideoPlayer">
            <source src={this.state.video_mp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
        </div>
        <div className="bg-video-controls">
          <img src={this.state.volumeIcon} alt="Mute Button" height="35px" width="35px" onClick={this.toggleSound} />
        </div>
      </div>
    );
  }
}

export default BgVideo;