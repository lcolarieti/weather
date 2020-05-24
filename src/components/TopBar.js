import React from 'react';
import {connect} from 'react-redux';
import Tab from './Tab';

const mapStateToProps = state => {
  return {
    weather   : state.weather,
    ready     : state.ready
  };
};


class TopBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      render: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.weather !== this.props.weather && this.props.ready) this.setState({render: true});
  }

  createTabs() {
    let tabs = [];
    const daily = this.props.weather.daily;
    daily.forEach((item, i) => i !== daily.length - 1 && tabs.push(<Tab key={item.dt} index={i} item={item} />));
    return tabs;
  }

  render() {
      return (
        <header>
          <h1>Weather forecast</h1>
          <nav>
            <ul>
              {this.state.render && this.createTabs()}
            </ul>
          </nav>
        </header>
      );
  }

}

export default connect(mapStateToProps, null)(TopBar);
