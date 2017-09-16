import React, { Component } from 'react';
import './Table.css';
import PropTypes from "prop-types";

class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Age</th>
                            <th>Happiness</th>
                            <th>Event</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(
                            (row, i) => (
                                <tr key={i}>
                                    <td>{row.age}</td>
                                    <td>{row.happiness}</td>
                                    <td>{row.event}</td>
                                    <td>{row.notes}</td>
                                    <td><button onClick={() => this.props.removeEntry(i)}>x</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;

