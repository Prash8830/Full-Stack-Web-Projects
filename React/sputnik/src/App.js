// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar' 
// import About from './components/About' 
import Form from './components/Form'
import Alert from './components/Alert'

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message,type) => {
    setalert({
      msg:message,
      ty:type})
      setTimeout(()=>{
        setalert(null);
      },1500);
  }
  const togglemode= () =>{
    if(mode ==='light')
    {
        setmode("dark");
        document.body.style.backgroundColor='#073642';
        // document.body.style.color='#lightgreen';
        showAlert("Dark Mode is enabled","Success !");
    }
    else{
        setmode("light");
        document.body.style.backgroundColor='white';
        // document.body.style.Color='black';
        showAlert("Light Mode is enabled","Success !");

    }
}
  return (
    <>
      <Navbar title="Home" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <Form mode={mode} showAlert={showAlert}/>
    </>
  );  
}

export default App;
