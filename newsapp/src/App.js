import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
          <Router>
        
         <div>
              <div className="Header">Google News App</div>
               

        <nav>
        <div className="US"><Link to="/Us">US News</Link></div>
        <div className="World"><Link to="/World">World News</Link></div>
        <div className="Main"><Link to="/Main">Main Content</Link></div>
        </nav>

        <div> <Comments /> </div>
        <div> <Footer /> </div>


        /*{ <Switch>
        <Route path="/Us" component={Us}  />
        <Route path="/World" component={World}  />
        <Route path="/Main" component={Main}  />

        </Switch> } */
        </div>
        </Router> 


         
      )
  }

}




export default App;




