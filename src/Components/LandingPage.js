import React, { Component } from 'react'

export default class LandingPage extends Component {
   
    render() {

    return (
    <div>
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
