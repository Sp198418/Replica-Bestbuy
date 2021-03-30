import React from 'react';
import './App.css';
import {Switch} from "react-router-dom"
import NavBar from './components/Logo/NavBar/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Switch>
       {/* pages go here */}
       </Switch>
     
    </div>
  );
}

export default App;
