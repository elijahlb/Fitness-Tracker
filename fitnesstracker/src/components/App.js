import React, {Component} from 'react';
import Nav from './Nav';
import Planchoice from './Planchoice';
import exercises from "./exercises.json";


class App extends Component {


    state = {
      exercises
    };

    addExercices = id => {
      const exercises = this.state.exercises.filter(exercises => exercises.id !== id);

      this.setState({exercises})
    }

    render() {
      return (

        <div className="container">
        <Nav />
        {this.state.exercises.map(exercises => (
        
          <Planchoice
          removeExercises={this.removeExercises}
          key={exercises.id}
          name={exercises.name}
          group={exercises.group}
          instructions={exercises.instructions}
          />
        
        ))}
        </div>
    );
  }
}

export default App;
