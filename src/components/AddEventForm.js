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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        var values = this.state.age + this.state.happiness + this.state.event + this.state.notes;
        console.log("handleSubmit", values);
    }

    render() {
        return (
            <div id='addEventForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleInputChange} />
                    <input type="text" name="happiness" placeholder="#" value={this.state.happiness} onChange={this.handleInputChange} />
                    <input type="text" name="event" placeholder="Event" value={this.state.event} onChange={this.handleInputChange} />
                    <input type="text" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleInputChange} />
                    <input type="submit" value="+" />
                </form>
            </div>
        );
    }
}

export default AddEventForm;
