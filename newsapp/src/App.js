import React, { Component } from 'react';
import './App.css';
import "./components/Shared/Button.js"
import Button from "./components/Shared/Button";
import axios from "axios";
import Header from "./components/Header";
import Main from "./components/Main";
import Us from "./components/Us";
import World from "./components/World"
import Comments from "./components/Comments";
import Footer from "./components/Footer";




/* Using the functional component to test
// function App() {
//   return (
//     <div className="App">
      
//    <Header />
//    <Main />
//    <Us />
//    <World />
//    <Footer />

//     </div>
//   );
// } */

class App extends Component {
  render() {
      return (
          <div>
              <Button className={Header}><h1>{Header}</h1></Button>
              <Main />
               <Us />
               <World />
               <Comments />
               <Footer />


          </div>
      )
  }
}


export default App;




