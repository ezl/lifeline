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
        this.replaceTable = this.replaceTable.bind(this);
        this.removeEntry = this.removeEntry.bind(this);
    }

    state = {
        data: [
            {
                age: 0,
                happiness: 5,
                event: "I was born!",
                notes: "Look out world, here I come!"
            },
            {
                age: 5,
                happiness: 8,
                event: "Childhood",
                notes: "I had an awesome childhood! Just played with toys and went to the park and took naps. YEEEEEHAAAAWWW!"
            },
            {
                age: 7,
                happiness: 1,
                event: "My pet fish died.",
                notes: "First major trauma. Then to add insult to injury, my parents ate the fish for dinner."
            },
            {
                age: 18,
                happiness: 7,
                event: "Graduated from high school",
                notes: ""
            },
            {
                age: 21,
                happiness: 8,
                event: "So much beer!",
                notes: "Legal drinking age!"
            },
            {
                age: 28,
                happiness: 10,
                event: "Won the lottery",
                notes: "I guess that was cool."
            }
        ]
    };

    updateTable(entry) {
        this.setState({data: [...this.state.data, entry].sort(
            (a, b) => a.age - b.age)
        });
    }

    replaceTable(data) {
        data.pop(); // There's a newline at the end for some reason so just pop it off
        this.setState({data: data});
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
                    <Lifeline data={this.state.data} />
                    <SaveLoad data={this.state.data} replaceTable={this.replaceTable} />
                </div>
            </div>
        );
    }
}

export default App;
