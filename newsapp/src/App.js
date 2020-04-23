import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      
   <Header />
   <Main />

    </div>
  );
}

export default App;
