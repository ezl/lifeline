import React, { Component } from 'react';
import './AddEventForm.css';
import PropTypes from "prop-types";
import {Modal} from 'react-bootstrap'

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
            notes: '',
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
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
                <button onClick={this.handleOpenModal} className="submit btn">&#x2295; Add Events To Your Lifeline</button>
                <Modal
                    isOpen={this.state.showModal}
                    aria-labelledby='modal-label'
                    show={this.state.showModal}
                    onHide={this.handleCloseModal}
                >

                    <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title">Add An Event To Your Timeline</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-body">
                            <form className='form' onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label>How old were you?</label>
                                    <input className="form-control" type="text" name="age" placeholder="Age" value={this.state.age} onChange={this.handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <label>What happened?</label>
                                    <input className="form-control" type="text" name="event" placeholder="Event" value={this.state.event} onChange={this.handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <label>How happy were you at this time in your life (1-10)?</label>
                                    <input className="form-control" type="text" name="happiness" placeholder="#" value={this.state.happiness} onChange={this.handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <label>How did you feel about this / How did it impact you?</label>
                                    <br />
                                    <textarea className="form-control" type="text" name="notes" placeholder="Notes" value={this.state.notes} onChange={this.handleInputChange} />
                                </div>
                                <input className='submit btn' type="submit" value="&#x2295; Add This Event" />
                                <button className='btn' onClick={this.handleCloseModal}>I&apos;m done adding events</button>
                            </form>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default AddEventForm;
