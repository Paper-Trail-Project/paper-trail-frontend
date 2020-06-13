import React from 'react';
import Image from './Images/background.svg'
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'


const divStyle = {
  backgroundImage: 'url(' + Image + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

function App() {
  return (
    <div className="App" style={divStyle} >
      <div id="landing-page-container">
        <h1 id="page-title">Monster Money</h1>
        <div id="signup-signin-container">
          <button>Login</button>
          <button>Signup</button>
        </div>
      </div>
     
     {/* <Signup/>
     <Login/> */}
    </div>
  );
}

export default App;
