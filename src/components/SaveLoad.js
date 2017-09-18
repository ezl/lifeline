import React, { Component } from 'react';
import './SaveLoad.css';
import PropTypes from "prop-types";
import fileDownload from 'js-file-download';


class SaveLoad extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this)
        this.handleLoad = this.handleLoad.bind(this)
    }

    convertArrayOfObjectsToCSV(args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }

    handleLoad() {
        console.log("load button clicked");
    }

    handleSave() {
        var csv = this.convertArrayOfObjectsToCSV({
            data: this.props.data
        });
        fileDownload(csv, 'filename.csv');
    }

    render() {
        return (
            <div id='saveLoad'>
               <button onClick={this.handleSave}>Save</button>
               <button onClick={this.handleLoad}>Load</button>
            </div>
        );
    }
}

export default SaveLoad;

