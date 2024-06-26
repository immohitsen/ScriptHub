import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#0e0e35';
      showAlert("Dark mode has been enabled", "success");
      document.title = "ScriptHub - Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "ScriptHub - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="ScriptHub" mode={mode} toggleMode={toggleMode} />
      <Alert className="alert" alert={alert}/>
      <div className="container my-5 ">
      <Routes>
          <Route exact path="/about" element={<AboutUs mode={mode}/>} />
          <Route exact path="/ScriptHub" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze" mode={mode}/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
