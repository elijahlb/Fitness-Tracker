import React, {Component} from 'react';
import Nav from './Nav';
import Planchoice from './Planchoice';
import exercises from "./exercises.json";
import Notes from "./Notes";

class App extends Component {


    state = {
      exercises 
    };



    render() {
      return (

        <div className="container">
        <Nav />
        {this.state.exercises.map(exercises => (
        <div className="row">

          <div className="col-md-6">
          <Planchoice
          removeExercises={this.removeExercises}
          key={exercises.id}
          name={exercises.name}
          group={exercises.group}
          instructions={exercises.instructions}
          />
          </div>

          
          <Notes />
          </div>
        
        ))}
        </div>
    );
  }
}

export default App;
