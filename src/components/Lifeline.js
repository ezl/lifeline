import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


class Lifeline extends Component {
    render() {
        return (
            <div id='graph' className="section">
               <h2>Your Lifeline</h2>
               <LineChart width={600} height={450} data={this.props.data}>
                   <XAxis dataKey="age" label='Age' type='number' domain={[-1, 'dataMax + 5']} ticks={[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100]} />
                   <YAxis type='number' scale='linear' domain={[-1, 11]} ticks={[0,1,2,3,4,5,6,7,8,9,10]} />
                   <CartesianGrid strokeDasharray="3 3"/>
                   <Tooltip  />
                   <Line type="linear" dataKey="happiness" stroke="#3ec19d" activeDot={{r: 8}}/>
              </LineChart>
            </div>
        );
    }
}

export default Lifeline;


