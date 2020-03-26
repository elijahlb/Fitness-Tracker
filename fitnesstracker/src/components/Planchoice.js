import React from 'react';
import "../components/styles/nav.css"


function addExercise () {
  
}


function Planchoice(props) {
  return (
    <div className="container">
    <div className="card text-center">
      <div className="img-container">
        <img src={props.image} />
      </div>
      <div className="content">
          <li>
            <strong className="lifttwo">{props.name}</strong>
          </li>
          <br />
          <li>
            <strong className="lift">Muscle Group: {props.group}</strong>
          </li>
          <hr />
          <li>
            <strong className="lift">Instructions: </strong> {props.instructions}
          </li>
          <br />
      </div>
      <li>
      <form> {props.notes}
          <div className="form-group">
          <label for="exampleFormControlTextarea1 ">Notes</label>
          <textarea className="form-control" rows="3"></textarea>
          </div>
      </form>
      </li>

      <button onClick={() => props.addExercise(props.id)} className="add">
        Add to plan
      </button>
    </div>
    </div>
  );
}

export default Planchoice;