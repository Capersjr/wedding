import React, { Component } from 'react';
import './App.css';

import BgVideo from './BgVideo.jsx';
import Credits from './Credits.jsx';

import videoMp4 from './assets/wedding-save-the-date.mp4';
import posterUrl from './assets/StartingPosterFrame.jpg';
import volume from './assets/volume.svg';
import volumeMuted from './assets/volume-mute.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BgVideo posterUrl={posterUrl} videoMp4={videoMp4} volume={volume} volumeMuted={volumeMuted}/>  
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
