import React from 'react';
import "../styles/Main.css";


function Main (props) {
    return (
      <div>
      <h1 className="main-news"> Main Content</h1>
      <p className="main-country"> {props.country} </p>
      <p className="main-name"> {props.name} </p>
      <p className="main-url"> {props.url }</p>
    

      </div>
    );
  }
  
  export default Main
  