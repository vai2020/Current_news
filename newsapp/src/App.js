import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Us from "./components/Us";
import Thank from "./components/Thank";
import Feedback from "./components/Feedback";
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
                name:[],
             country:[],
                 url:[],

              usName:[],
           usCountry:[],
               usUrl:[]

              
                        }
                        }

        async getNews() {
        try{
        // let news=await axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_Newsapp_API_KEY}`);              
        const response=await axios.get(`https://newsapi.org/v2/sources?apiKey=${process.env.REACT_APP_Newsapp_API_KEY}`);              
        
        // console.log(response.data)
        
        // console.log(googleNews)
        // console.log(response.data.sources)
        // console.log(response.data.sources[0])
        // console.log(response.data.sources[0].name)
        const results=response.data.sources
        const googleNews=results.filter(news => news.name.includes("Google News"))
        // console.log(googleNews)
        // console.log(googleNews.country)
   
   
        //the following function used the map method - array.map(function(currentValue(Req),index(Opt), arr(Opt))) thisValue) to return googleNews' description, country and url for both us and international news//
        const newsResult=googleNews.map(mainNews => <div>{mainNews.description}{mainNews.country}{mainNews.url}</div>)
        // console.log(newsResult)

        //the following function used the filter method - array.filter(function(currentValue(Req), index(Opt), arr(Opt)), thisValue) to inclue googleNews that contains "us" in its country code
        const usNews=googleNews.filter(news => news.country.includes("us"))
        // console.log(usNews)

        //the following function used the map method to return us only googleNews 
        const usResult=usNews.map(mainNews => <div>{mainNews.description}{mainNews.country}{mainNews.url}</div>)
  
        
        
        // this.setState({name: newsResult})
        // this.setState({usName: usResult})
 
      }
        
        //using try and catch error statements within this block to catch and handle errors

        catch(error){
        // console.log(error)
        document.getElementById("error").innerHTML = error;
}
}
       
       componentDidMount() {
           this.getNews()
       }  
           
        render() {
        return (
          
          <Router>
        
              <div className="App">
              <div className="Header"><Header  />  </div>       
        
        <section className="navigator">
         
        <div><Link to="/Main">Main Content</Link></div>
        <div><Link to="/US">US News</Link></div>
        <div><Link to="/Feedback">Feedback</Link></div>
       
        </section>       

        <Switch>
        <Route path="/Main" component={Main}  />
        <Route path="/US" component={Us}  />
        <Route path="/Feedback" component={Feedback}  />
        </Switch>	       

       
          {/* <h1> {this.state.name} </h1>   */}
        {/* <Main name={this.state.name}country={this.state.country} url={this.state.url} /> 
        <Us name={this.state.usName}country={this.state.usCountry} url={this.state.usUrl} />  */}

        {/* <div> <Feedback /> </div> */}
        <div> <Thank  /></div>  
        <div> <Footer /> </div>
                
        </div>
        </Router> 
         
      )
  }

}

export default App;




