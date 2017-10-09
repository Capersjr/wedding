import React, { Component } from 'react';

import './Credits.css';

class Credits extends Component {
    render() {
      return (
        <div>  
            <div id="Credits" className="Credits">
            <p className="Credits-production">
                A Kitty Cupcake Shimmer Shine<br/>
                &amp; Karate Man Capers<br/>
                Production
            </p>

            <p className="Credits-cast">
                Starring:<br/>
                Alea Gillead &amp; Vincent Capers Jr.
            </p>

            <p className="Credits-crew">
                Director: John "Capital Gee" Barnes
            </p>

            <p className="Credits-crew">
                Cameraman: Gregory Barnes
            </p>

            <p className="Credits-crew">
                Editor: V. Capers Jr.
            </p>

            <p className="Credits-producers">
                Produced by<br/>
                Alea Gillead &amp; Vincent Capers Jr.
            </p>

            <p>
                <a href="#top">Back</a>
            </p>

            </div>
            <div id="CreditsLink" className="Credits-link">
                <a href="#Credits">Credits</a>
            </div>
        </div>
      );
    }
  }
  
  export default Credits;
  
