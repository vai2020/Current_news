import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Us from "./components/Us";



function App() {
  return (
    <div className="App">
      
   <Header />
   <Main />
   <Us />

    </div>
  );
}

export default App;
