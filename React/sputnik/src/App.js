// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar' 
// import About from './components/About' 
import Form from './components/Form'

function App() {
  const [mode, setmode] = useState("light");
  const togglemode= () =>{
    if(mode ==='light')
    {
        setmode("dark");
        document.body.style.backgroundColor='#073642';
        // document.body.style.color='#lightgreen';
    }
    else{
        setmode("light");
        document.body.style.backgroundColor='white';
        // document.body.style.Color='black';
    }
}
  return (
    <>
      <Navbar title="Home" mode={mode} togglemode={togglemode}/>
      <Form mode={mode}/>
    </>
  );  
}

export default App;
