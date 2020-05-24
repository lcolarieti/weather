import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {utils} from '../utils/utils';

class TabContentGraph extends React.Component {


  render() {
    let data = [];
    this.props.item.forEach((item, i) => {
      data.push({name: utils.timestampToHour(item.dt), temp: item.temp})
    });

    const renderLineChart = (
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="temp" stroke="#3441f2" />
        <CartesianGrid stroke="#fff" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
    return (
      <div className="graph">
        {data.length > 0 ? renderLineChart : <h2>No data available for this day</h2>}
      </div>
    );
  }

}

export default TabContentGraph;
