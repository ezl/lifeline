import React, { Component } from 'react';
import './Table.css';
import PropTypes from "prop-types";
import ReactTooltip from 'react-tooltip';
import Confirm from 'react-confirm-bootstrap';

class Table extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div className="section">
                <h2>Your Major Life Events</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Age</th>
                            <th>What Happened</th>
                            <th>Happiness</th>
                            <th>Notes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(
                            (row, i) => (
                                <tr key={i}>
                                    <td>{row.age}</td>
                                    <td>{row.event}</td>
                                    <td>{row.happiness}</td>
                                    <td>{row.notes && <p className='moreHover' data-tip={row.notes}>More</p>}</td>
                                    <td>
                                        <Confirm
                                            onConfirm={() => this.props.removeEntry(i)}
                                            body="Are you sure you want to delete this?"
                                            confirmText="Confirm Delete"
                                            title="Deleting Stuff">
                                            <button className='remove' onClick={() => this.props.removeEntry(i)}>&#xd7;</button>
                                        </Confirm>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
                <ReactTooltip effect='solid' className='tooltip' place='right' offset={{right: 30}} />
            </div>
        );
    }
}

export default Table;

