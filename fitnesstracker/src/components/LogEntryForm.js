import React from 'react';
import "../components/styles/nav.css"





const LogEntryForm = () => {
    return (
        <div className="container">
        <div className="col-md-6">
        <form className="content">
            <label htmlFor="exercise" className="label1">Exercise Type</label>
            <input name="exercise" /><br />
            <label htmlFor="reps" className="label2">Reps</label>
            <input name="reps" /><br />
            <label htmlFor="sets" className="label3">Sets</label>
            <input name="sets" /><br />
            <label htmlFor="duration" className="label4">Duration in Minutes</label>
            <input name="duration" /><br />
            <label htmlFor="notes" className="label5">General Notes</label>
            <input name="notes" />
        </form>
        <button className="add">Submit</button>
        </div>
        </div>
    )
}

export default LogEntryForm;