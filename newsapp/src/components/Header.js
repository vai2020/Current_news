import React from 'react';



// function Header() {   //use function component for testing
//     return (
//       <div>
    
//         <h1 className="header"> Google News App</h1>
  
//       </div>
//     );
//   }


  class Header extends React.Component {
    render() {
        return (
            <div>
                
                <h1 className="Header"> Google News App</h1>
  
            </div>
        )
    }
  }
  
  export default Header
  