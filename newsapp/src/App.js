import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Us from "./components/Us";
import World from "./components/World"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
   <Header />
   <Main />
   <Us />
   <World />
   <Footer />

    </div>
  );
}

export default App;
