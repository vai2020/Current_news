import React, { Component } from 'react';
import './App.css';

console.log(process.env.REACT_APP_Newsapp_API_KEY)
import axios from "axios";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
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
              <div> <Header /> </div>
              <div> <Us /> </div>
               <div> <World /> </div>
               <div> <Main /> </div>
               <div> <Comments /> </div>
               <div> <Footer /> </div>
<div> TGIF tofay</div>

          </div>
      )
  }
}


export default App;




