import React, {Component} from 'react';
import "../components/styles/nav.css";
import axios from 'axios';



class LogEntryGen extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         type: "squats",
    //         reps: "10",
    //         sets: "3",
    //         duration: "30",
    //         notes: "255 lbs"
    //     }
    // }

    state = {
        results: []
    }
    
    componentDidMount = () => {
        axios.get('/api/exercise')
        .then( res => {
            const results = res.data
            this.setState({results})
        })
    }

    render () {
 

        return (
        <div className="container">
        <div className="col-md-6">
        <form className="content">
            <label htmlFor="exercise" className="label1">Exercise Type: </label>
            <label htmlFor="reps" className="label2">Reps: </label><br />
            <label htmlFor="sets" className="label3">Sets: </label><br />
            <label htmlFor="duration" className="label4">Duration in Minutes: </label>
            <label htmlFor="notes" className="label5">General Notes: </label>
        </form>
        <button className="add">Delete</button>
        </div>
        </div>
        )
    }
}

export default LogEntryGen;