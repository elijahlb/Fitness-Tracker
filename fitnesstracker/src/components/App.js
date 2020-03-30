import React, {Component} from 'react';
import Nav from './Nav';
import LogEntryForm from './LogEntryForm';
import LogEntryGen from './LogEntryGen';
import ColumnLabel from './ColumnLabel';



class App extends Component {
    render() {
        const colTitle = {
          title1: "Enter workout here:",
          title2: "Planned workouts:"
        }
      return (
        <div className="container">
        <Nav />
        <div className="col-md-6">
        <ColumnLabel name={colTitle.title1}/>
        <LogEntryForm />
        </div>
        <div className="col-md-6">
        <ColumnLabel name={colTitle.title2}/>
        <LogEntryGen />
        </div>
        </div>
    );
  }
}
export default App;
