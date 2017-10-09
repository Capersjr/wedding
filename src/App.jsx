import React, { Component } from 'react';
import './App.css';

import BgVideo from './BgVideo.jsx';
import Credits from './Credits.jsx';

import posterUrl from './assets/StartingPosterFrame.jpg';
import volume from './assets/volume.svg';
import volumeMuted from './assets/volume-mute.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId : "ozhpggFu2xw",
      height: 1080,
      width: 1920,
      volume: volume,
      volumeMuted:volumeMuted,
      posterUrl: posterUrl};
  }

  render() {
    return (
      <div className="App">
        <div id="top"></div>
        {/* <BgVideo posterUrl={posterUrl} videoMp4={videoMp4} volume={volume} volumeMuted={volumeMuted}/>   */}
        <BgVideo posterUrl={this.state.posterUrl} videoId={this.state.videoId} height={this.state.height} width={this.state.width} volume={this.state.volume} volumeMuted={this.state.volumeMuted}/>
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Alea &amp; Vincent</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Credits/>
      </div>
    );
  }
}

export default App;
