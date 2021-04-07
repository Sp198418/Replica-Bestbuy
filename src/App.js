import React from 'react';
import './App.css';
// import {Switch} from "react-router-dom";
import NavBar from './components/Logo/NavBar/NavBar';
import HomePage from './components/Logo/HomePage/HomePage';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <HomePage/>
       {/* <Switch>
      //  {/* pages go here */}
       {/* </Switch> */}
     
    </div>
  );
}

export default App;
