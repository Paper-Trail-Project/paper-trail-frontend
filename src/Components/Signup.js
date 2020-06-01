import React from 'react'
import '../Styles/Signup.css'

export default function Signup() {
    return (
        <div id="Signup-container">
            <h1>Signup</h1>
            <form id="Signup-form">
                <div id="Signup-name-container">
                    <input className="Signup-input-name" placeholder="First Name"></input>
                    <input className="Signup-input-name" placeholder="Last Name"></input>
                </div>
                <input className="Signup-input" placeholder="Username"></input>
                <input className="Signup-input" placeholder="Email"></input>
                <input className="Signup-input" placeholder="Password"></input>
                <button id="Signup-button">Submit</button>
            </form>
            
        </div>
    )
}
