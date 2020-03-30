import React, {Component} from 'react';
import "../components/styles/nav.css";
import axios from 'axios';



class LogEntryGen extends Component {

    constructor() {
        super();
        this.state = {
            type: "squats",
            reps: "10",
            sets: "3",
            duration: "30",
            notes: "255 lbs"
        }
    }
    
    getUserData = () => {
        axios.get('/api/logs')
        .then((data) => {
            console.log(data)
        });
    };


    render () {
 

        return (
        <div className="container">
        <div className="col-md-6">
        <form className="content">
            <label htmlFor="exercise" className="label1">Exercise Type: {this.state.type}</label>
            <label htmlFor="reps" className="label2">Reps:{this.state.reps} </label>
            <label htmlFor="sets" className="label3">Sets: {this.state.sets}</label>
            <label htmlFor="duration" className="label4">Duration in Minutes: {this.state.duration}</label>
            <label htmlFor="notes" className="label5">General Notes: {this.state.notes}</label>
        </form>
        <button onClick={this.getUserData} className="add">Delete</button>
        </div>
        </div>
        )
    }
}

export default LogEntryGen;