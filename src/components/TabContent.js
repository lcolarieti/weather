import React from 'react';
import {connect} from 'react-redux';
import TabContentInfo from './TabContentInfo';
import TabContentGraph from './TabContentGraph';

const mapStateToProps = state => {
  return {
    weather   : state.weather,
    ready     : state.ready,
    activeTab : state.activeTab
  };
};


class TabContent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      render: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weather !== this.props.weather && this.props.ready) this.setState({render: true});
  }

  createContent() {
    const daily = this.props.weather.daily[this.props.activeTab];
    const dayStart = new Date(daily.dt * 1000).setHours(0, 0, 0);
    const dayEnd = new Date(daily.dt * 1000).setHours(23, 59, 59);
    const hourly = this.props.weather.hourly.filter((hour) => {return (hour.dt * 1000) >= dayStart && (hour.dt * 1000) <= dayEnd});
    
    return [
      <TabContentInfo key="daily" item={daily} />,
      <TabContentGraph key="hourly" item={hourly} />
    ];
  }

  render() {
      return (
        <section className="tab-content">
          {this.state.render && this.createContent()}
        </section>
      );
  }

}

export default connect(mapStateToProps, null)(TabContent);
