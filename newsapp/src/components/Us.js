import React from 'react';
import "../styles/US.css";

function Us (props) {
    return (
      <div>
        
        <h1 className="us-news">US News</h1>   
        {/* <p className="us-country"> {props.country} </p>
        <p className="us-name"> {props.name} </p>
        <p className="us-url"> {props.url}</p> */}
        <p className="us-name"> {props.usName} </p>
        <p className="us-country"> {props.usCountry} </p>
        <p className="us-url"> {props.usUrl} </p>
       

  
      </div>
    );
  }
  
  export default Us



  // <h1 className="us-country"> {props.country} </h1>
  // <p className="us-name"> {props.name} </p>
  // <p className="us-url"> {props.url}</p>
