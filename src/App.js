import React, { Component } from 'react';
import './App.css';
import AddEventForm from './components/AddEventForm'
import Table from './components/Table'
import SaveLoad from './components/SaveLoad'
import Lifeline from './components/Lifeline'

class App extends Component {
    constructor(props) {
        super(props)
        this.updateTable = this.updateTable.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
    }

    state = {
        data: [
            {
                age: 5,
                happiness: 3,
                event: "New Toy",
                notes: "fo fo blah blah"
            },
            {
                age: 16,
                happiness: 6,
                event: "First girlfriend",
                notes: "bar bar blah blah"
            },
            {
                age: 21,
                happiness: 1,
                event: "So much beer!",
                notes: "baz baz blah blah"
            }
        ]
    };

    updateTable(entry) {
        this.setState({data: [...this.state.data, entry].sort(
            (a, b) => a.age - b.age)
        });
    }

    removeEntry(i) {
        var data = this.state.data;
        data.splice(i, 1);
        this.setState({data: data});
    }

    render() {
        return (
            <div className="App">
                <h1>Lifeline</h1>
                <div id='left'>
                    <AddEventForm updateTable={this.updateTable} />
                    <Table data={this.state.data} removeEntry={this.removeEntry} />
                </div>
                <div id='right'>
                    <SaveLoad />
                    <Lifeline data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default App;
