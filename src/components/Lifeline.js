import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';



class Lifeline extends Component {
    render() {
        return (
            <div id='graph'>
                <LineChart width={400} height={300} data={this.props.data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="age" />
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="linear" dataKey="age" stroke="#8884d8" activeDot={{r: 8}}/>
              </LineChart>
            </div>
        );
    }
}

export default Lifeline;


