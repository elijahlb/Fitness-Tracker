import React from 'react';
import "../components/styles/nav.css"

function Nav() {
  return (
    <div className="container">
     <div className="jumbotron text-center heading">
           <span>FITNESS TRACKER</span> <br />
            <button className="navbutton">My Plan</button>
     </div>
    </div>
  );
}

export default Nav;