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


    // constructor(props) {
    //     super(props)      
        
    // }
    //         state = {}
    //         getNews = async () => {               
    //         const news = await axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_Newsapp_API_KEY}`);           
    //         console.log(news);
    //         this.setState({
    //             name: news.data.species.name

    //             }) 
                                 
    //     }
    class App extends Component {
            constructor(props){
                super(props)
                this.state={
                name:[]
                        }
                        }

        async getNews() {
        try{
        let news=await axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_Newsapp_API_KEY}`);              
        console.log(news)
        this.state({name: news.data})
        }
        catch(error){
        console.log(error);
}
}
       
       componentDidMount() {
           this.getNews()
       }  
           
        render() {
      return (
          <Router>
        
         <div>
              <div className="Header">Google News App</div>            
        
        <section>
        <div className="US"><Link to="/Us">US News</Link>  </div>
        <div className="Main"><Link to="/Main">Main Content</Link> </div>
        <div className="World"><Link to="/World">World News</Link></div>
        </section>
        <h1> Name={this.state.name} </h1>

       /*  <p>xxx{this.state.name.map((name, id) => <ul key={id}> <li key={id} >  {name.name}  </li> </ul> )}  </p>     */


        <div className="lower-page">
        <div> <Comments /> </div>
        <div> <Footer /> </div>
        </div>

        <Switch>
        <Route path="/Us" component={Us}  />
        <Route path="/World" component={World}  />
        <Route path="/Main" component={Main} />

        </Switch> 


        </div>
        </Router> 

      
         
      )
  }

}




export default App;




// {/* <Route path="/Main" component={Main}>  
//         <Main name={this.state.name}> </Main> */}


// https://pokeapi.co/api/v2/pokemon/pikachu




