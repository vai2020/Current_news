import React from 'react';
import "../styles/Main.css";


function Main (props) {
    return (
      <div className="main-news">
        
        
      <h1 className="final-name"> {props.country} </h1>
      <p className="main-item"> {props.name} </p>
      <p className="main-item"> {props.url }</p>

      </div>
    );
  }
  
  export default Main
  