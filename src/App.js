  
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/HomeScreen'
import Navbar from './Pages/Home/Navbar';

function App() {

  return (
    <>
      <Router>
          <Navbar />
          <Home />
      </Router>
    </>
  );
}

export default App;
