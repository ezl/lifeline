import React, { Component } from 'react';
import './App.css';
import AddEventForm from './components/AddEventForm'
import Table from './components/Table'
import SaveLoad from './components/SaveLoad'
import Lifeline from './components/Lifeline'

class App extends Component {
    state = {
        data: [
            {
                age: 5,
                score: 3,
                event: "New Toy",
                notes: "fo fo blah blah"
            },
            {
                age: 16,
                score: 6,
                event: "First girlfriend",
                notes: "bar bar blah blah"
            },
            {
                age: 21,
                score: 1,
                event: "So much beer!",
                notes: "baz baz blah blah"
            }
        ],
        foo: 'blah blah blah'
    };

    render() {
        return (
            <div className="App">
                <h1>Lifeline</h1>
                <div id='left'>
                    <AddEventForm />
                    <Table data={this.state.data} />
                </div>
                <div id='right'>
                    <SaveLoad />
                    <Lifeline />
                </div>
            </div>
        );
    }
}

export default App;
