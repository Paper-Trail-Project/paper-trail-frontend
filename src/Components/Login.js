import React from 'react'
import '../Styles/Login.css'

export default function Login() {
    return (
        <div id="Login-container">
            <h1>Login</h1>
            <form id="Login-form">
                <input className="Login-input" placeholder="Email"></input>
                <input className="Login-input" placeholder="Password"></input>
                <button id="Login-button">Login</button>
            </form>
            
        </div>
    )
}
