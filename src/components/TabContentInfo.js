import React from 'react';
import {utils} from '../utils/utils';

class TabContentInfo extends React.Component {


  render() {
    const item = this.props.item;
    return (
      <div className="info">
        <p>Sunrise Time: <span>{utils.timestampToHour(item.sunrise)}</span></p>
        <p>Sunset Time: <span>{utils.timestampToHour(item.sunset)}</span></p>
        <p>Average temperature (Perceived): <span>{item.temp.eve}° ({item.feels_like.eve}°)</span></p>
        <p>Humidity: <span>{item.humidity}%</span></p>
        <p>Precipitation: <span>{item.dew_point}%</span></p>
      </div>
    );
  }

}

export default TabContentInfo;
