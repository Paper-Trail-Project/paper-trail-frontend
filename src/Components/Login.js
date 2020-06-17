import React, { useState } from 'react'
import '../Styles/Login.css'

export default function Login() {

    console.log(localStorage.getItem("token"))

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        console.log(event)

        fetch("http://localhost:8000/login", {
            method: "POST",
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            })
        }).then(response => console.log(response))
        // fetch("http://localhost:8000/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         username: formData.get("username"),
        //         password: formData.get("password")
        //     })
        // }).then(response => console.log(response))
        //     .then(({token}) => {
        //         localStorage.setItem("token", token)
        //         console.log("here it is!", localStorage.getItem("token"))
        //     })
    }


    return (
        <div id="landing-page-container">
            <h1 id="page-title">Monster Money</h1>
            <div id="Login-container">
            <form id="Login-form" onSubmit={handleSubmit}>
                <input className="Login-input" name="username" type="text" placeholder="Email"></input>
                <input className="Login-input" name="password"type="password"placeholder="Password"></input>
                <button id="Login-button" type="submit">Login</button>
            </form>
            </div>
        </div>
    )
}
