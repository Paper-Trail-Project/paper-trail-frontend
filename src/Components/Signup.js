import React from 'react'
import '../Styles/Signup.css'

export default function Signup() {
    return (
        <div id="Signup-container">
            <h1>Signup</h1>
            <form id="Signup-form">
                <input className="Signup-input" placeholder="Name"></input>
                <input className="Signup-input" placeholder="Email"></input>
                <input className="Signup-input" placeholder="Password"></input>
                <button id="Signup-button">Submit</button>
            </form>
            
        </div>
    )
}
