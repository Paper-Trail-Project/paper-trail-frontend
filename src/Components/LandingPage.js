import React, { Component } from 'react'
import Image from '../Images/background.svg'

export default class LandingPage extends Component {
   
    
    render() {

        const divStyle = {
            backgroundImage: 'url(' + Image + ')',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          };

    return (
    <div style={divStyle}>
        <div id="landing-page-container">
            <h1 id="page-title">Monster Money</h1>
            <div id="signup-signin-container">
                <button><a href="/login">Login</a></button>
                <button><a href="/signup">Signup</a></button>
            </div>
        </div>
    </div>
        )
    }
}
