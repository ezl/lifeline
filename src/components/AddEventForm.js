import React, { Component } from 'react';
import './AddEventForm.css';

class AddEventForm extends Component {
    render() {
        return (
            <div id='addEventForm'>
                <form>
                    <input type="text" placeholder="Age" />
                    <input type="text" placeholder="#" />
                    <input type="text" placeholder="Event" />
                    <input type="text" placeholder="Notes" />
                    <input type="submit" value="+" />
                </form>
            </div>
        );
    }
}

export default AddEventForm;
