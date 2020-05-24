import React from 'react';
import {connect} from 'react-redux';
import {updateActiveTabAction} from '../actions/actions';

const mapStateToProps = state => {
  return {
    activeTab   : state.activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateActiveTab  : index => dispatch(updateActiveTabAction(index))
  };
}

class Tab extends React.Component {

  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick() {
    this.props.updateActiveTab(this.props.index);
  }

  render() {
    const item  = this.props.item;
    const dt = new Date(item.dt * 1000).toString().split(' ');
    const day = `${dt[0]} ${dt[2]}`
    const src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    return (
      <li className={(this.props.index === this.props.activeTab ? 'active' : '')} onClick={this.handleTabClick}>
        <p>{day}</p>
        <img src={src} title={item.weather[0].description} alt={item.weather[0].description} />
        <p>
          <span>{parseInt(item.temp.min, 10)}°</span>
          <span>{parseInt(item.temp.max, 10)}°</span>
        </p>
      </li>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
