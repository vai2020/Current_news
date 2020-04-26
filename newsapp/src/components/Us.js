import React from 'react';
import "../styles/US.css";

function Us (props) {
    return (
      <div>
        
       <h1 className="us-news">US News</h1>   
        <h1 className="us-country"> {props.country} </h1>
        <p className="us-name"> {props.name} </p>
        <p className="us-url"> {props.url}</p>



  
      </div>
    );
  }
  
  export default Us



  // <h1 className="us-country"> {props.country} </h1>
  // <p className="us-name"> {props.name} </p>
  // <p className="us-url"> {props.url}</p>
