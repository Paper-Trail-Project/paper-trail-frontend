import React from 'react'
import '../Styles/Signup.css'

export default function Signup() {
    return (
        <div id="landing-page-container">
            <h1 id="page-title">Monster Money</h1>
            <div id="Signup-container">
                <form id="Signup-form">
                    <input className="Signup-input" placeholder="Name"></input>
                    <input className="Signup-input" placeholder="Email"></input>
                    <input className="Signup-input" placeholder="Password"></input>
                    <button id="Signup-button">Submit</button>
                </form>
            </div>
        </div>
    )
}
