import React, { useState } from 'react'
import '../Styles/Signup.css'
import Image from '../Images/background.svg'


export default function Signup(props) {
  
    const divStyle = {
        backgroundImage: 'url(' + Image + ')',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

    const [newUserData, setNewUserData] = useState({ name: "", username: "", password: "" })

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signup(newUserData, props.history)
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUserData({ ...newUserData, [name]: value });
    };

    return (
        <div id="landing-page-container" style={divStyle}>
            <h1 id="page-title">Monster Money</h1>
            <div id="Signup-container">
                <form id="Signup-form" onSubmit={handleSubmit}>
                    <input 
                    className="Signup-input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={newUserData.name}
                    onChange={handleChange}>
                    </input>
                    <input 
                    className="Signup-input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    required
                    value={newUserData.username}
                    onChange={handleChange}>
                    </input>
                    <input 
                    className="Signup-input" 
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={newUserData.password}
                    required
                    onChange={handleChange}
                    ></input>
                    <button id="Signup-button" type="submit">
                    Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
