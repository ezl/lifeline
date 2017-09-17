import React, { Component } from 'react';
import './AddEventForm.css';
import PropTypes from "prop-types";

class AddEventForm extends Component {
    static propTypes = {
        updateTable: PropTypes.func.isRequired,
    };

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

    handleSubmit(e) {
        e.preventDefault();
        var entry = {
            age: this.state.age,
            happiness: this.state.happiness,
            event: this.state.event,
            notes: this.state.notes
        };

        this.props.updateTable(entry);
        this.resetForm();

    }

    resetForm() {
        this.setState({
            age: '',
            happiness: '',
            event: '',
            notes: ''
        });
    }

    render() {
        return (
            <div id='addEventForm' className="section">
                <h2>Add An Event To Your Lifeline</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>How old were you?</label>
                        <input type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>What happened?</label>
                        <input type="text" name="event" placeholder="Event" value={this.state.event} onChange={this.handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>How happy were you at this time in your life (1-10)?</label>
                        <input type="text" name="happiness" placeholder="#" value={this.state.happiness} onChange={this.handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label>How did you feel about this / How did it impact you?</label>
                        <br />
                        <textarea type="text" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleInputChange} />
                    </div>
                    <input className='submit' type="submit" value="&#x2295; Add Event" />
                </form>
            </div>
        );
    }
}

export default AddEventForm;
