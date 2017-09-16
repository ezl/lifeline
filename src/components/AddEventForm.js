import React, { Component } from 'react';
import './AddEventForm.css';

class AddEventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: '',
            happiness: '',
            event: '',
            notes: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        var values = this.state.age + this.state.notes;
        console.log("handleSubmit", values);
    }

    render() {
        return (
            <div id='addEventForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Age" value={this.state.age} />
                    <input type="text" placeholder="#" value={this.state.happiness} />
                    <input type="text" placeholder="Event" value={this.state.event} />
                    <input type="text" placeholder="Notes" value={this.state.notes} />
                    <input type="submit" value="+" />
                </form>
            </div>
        );
    }
}

export default AddEventForm;
