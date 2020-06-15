import React from 'react'
import '../Styles/Login.css'

export default function Login() {
    return (
        <div id="landing-page-container">
            <h1 id="page-title">Monster Money</h1>
            <div id="Login-container">
            <form id="Login-form">
                <input className="Login-input" placeholder="Email"></input>
                <input className="Login-input" placeholder="Password"></input>
                <button id="Login-button">Login</button>
            </form>
            </div>
        </div>
    )
}
