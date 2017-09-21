import React, { Component } from 'react';
import PropTypes from "prop-types";
import ReactFileReader from 'react-file-reader';
import Papa from 'papaparse';
import './SaveLoad.css';
import {CSVLink} from 'react-csv';


const FILENAME = "lifeline.csv";

class SaveLoad extends Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        replaceTable: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this)
    }

    handleLoad(files) {
        var file = files[0];
        var that = this;
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                var data = results.data;
                that.props.replaceTable(data);
            }
        });
    }

    render() {
        return (
            <div id='saveLoad'>
                <CSVLink className='btn' data={this.props.data} filename={FILENAME}>Save</CSVLink>
                <ReactFileReader handleFiles={this.handleLoad} multipleFiles={false} fileTypes='csv'>
                    <button className='btn'>Upload</button>
                </ReactFileReader>
            </div>
        );
    }
}

export default SaveLoad;

