import React, {Component} from 'react';
import Nav from './Nav';
import LogEntryForm from './LogEntryForm';




class App extends Component {




    render() {
      return (
 

        <div className="container">

        <Nav />
        <div className='text-center'>
        <LogEntryForm />
        </div>
        </div>
    );
  }
}

export default App;
