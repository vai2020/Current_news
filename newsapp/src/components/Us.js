import React from 'react';
import "../styles/US.css";

function Us (props) {
    return (
      <div>
        
        <p className="US1"> US News: </p>
        <h1 className="final-name"> {props.country} </h1>
        <p className="main-item"> {props.name} </p>
        <p className="main-item"> {props.url }</p>



  
      </div>
    );
  }
  
  export default Us