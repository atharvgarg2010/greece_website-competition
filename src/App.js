import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'animate.css';
import Home from './components/Home';
import About from './components/About';
import GreeceAboutBox from './components/GreeceAboutBox';

function App() {
  return (
    <>
    <Router>
    <Navbar>
    </Navbar>
    

    <Routes>
      <Route exact path='/' element={<><Home></Home><About></About><GreeceAboutBox/></>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
