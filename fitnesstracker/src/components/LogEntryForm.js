import React, { Component } from 'react';
import "../components/styles/nav.css";
import axios from 'axios';







class LogEntryForm extends Component {


    constructor() {
        super();
        this.state = {
            exercise: "",
            reps: "",
            sets: "",
            duration: "",
            notes: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChange = event => {
        this.setState({
            exercise: event.target.value,
            reps: event.taget.value,
            sets: event.target.value,
            duration: event.target.value,
            notes: event.target.value
        })
    }

    handleSubmit() {
        axios.post('/api/excercise', this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


render() {
    return (

        <div className="container">
            <div className="col-md-6">
                <form className="content" onSubmit={this.handleSubmit}>
                    <label htmlFor="exercise" className="label1">Exercise Type: </label>
                    <input type="text" name="exercise" /><br />
                    <label htmlFor="reps" className="label2">Reps: </label>
                    <input type="number" name="reps" /><br />
                    <label htmlFor="sets" className="label3">Sets: </label>
                    <input type="number" name="sets" /><br />
                    <label htmlFor="duration" className="label4">Duration in Minutes: </label>
                    <input type="number" name="duration" /><br />
                    <label htmlFor="notes" className="label5">General Notes: </label>
                    <input type="text" name="notes" />
                </form>
                <button onClick={this.handleSubmit} className="add text-center" type="submit">Submit</button>
            </div>
        </div>
    )
}
}

export default LogEntryForm;