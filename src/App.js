import React from 'react';
import Image from './Images/background.svg'
import './App.css';
import Routes from './Components/Routes'



const divStyle = {
  backgroundImage: 'url(' + Image + ')',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};



function App() {
  return (
    <div className="App" style={divStyle} >
      <Routes />
    </div>
  );
}

export default App;
