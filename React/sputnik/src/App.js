// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Form from './components/Form'
// import Alert from './components/Alert'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");

  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = '#073642';
      // document.body.style.color='#lightgreen';
      // showAlert("Dark Mode is enabled", "Success !");
      document.title = "Text Investigator.Dark Mode";
      // setInterval(()=>{
      //  document.title="Nice";
      // },1500);
      // setInterval(()=>{
      //  document.title="Awesome";
      // },2000);
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white';
      // document.body.style.Color='black';
      // showAlert("Light Mode is enabled", "Success !");
      document.title = "Text Investigator.Light Mode";

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Home" mode={mode} togglemode={togglemode} />
      {/* <Alert alert={alert} /> */}
      <Switch>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route exact path="/">
          <Form mode={mode}  />
        </Route>
      </Switch>
      {/* <About/> */}
    </Router>
    </>
  );
}

export default App;