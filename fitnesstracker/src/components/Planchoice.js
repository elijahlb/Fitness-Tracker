import React from 'react';
import "../components/styles/nav.css"

function Planchoice(props) {
  return (
    <div className="container">
    <div className="card text-center">
      <div className="img-container">
        <img src={props.image} />
      </div>
      <div className="content">
          <li>
            <strong className="lift">{props.name}</strong>
          </li>
          <li>
            <strong className="lift">Muscle Group: {props.group}</strong>
          </li>
          <li>
            <strong className="lift">Instructions: </strong> {props.instructions}
          </li>
          <br />
      </div>
      <button onClick={() => props.addExercise(props.id)} className="add">
        Add to plan
      </button>
    </div>
    </div>
  );
}

export default Planchoice;