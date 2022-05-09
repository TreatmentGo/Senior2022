import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div className="App">
    <Header/> 
    <Home/>
    </div>
  );
}

export default App;
