import React from 'react'

export default function NavButtons() {

    const handleSignOut = (event)=> {
        event.preventDefault()
        window.localStorage.clear();
        window.location.href = "/" 
    }

    const handleHome = ()=> {
        window.location.href = "/home" 
    }

    return (
        <div id="nav-buttons">
        <button onClick={handleSignOut}>Signout</button>
        <button onClick={handleHome}>Home</button>
      </div>
    )
}
