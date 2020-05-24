import React from 'react';
import TopBar from './TopBar';
import TabContent from './TabContent';
import Loading from './Loading';
import {connect} from 'react-redux';
import {utils} from '../utils/utils';
import './../app.scss';
import {
  updateCoordsAction,
  updateReadyAction,
  updateWeatherDataAction
} from './../actions/actions';

const mapStateToProps = state => {
  return {
    coords    : state.coords,
    ready     : state.ready
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCoords  : coords    => dispatch(updateCoordsAction(coords)),
    updateReady   : ready     => dispatch(updateReadyAction(ready)),
    updateWeather : data      => dispatch(updateWeatherDataAction(data))
  };
}


class App extends React.Component {

  componentDidMount() {
    utils.getLocation().then(position => {
      position ? this.props.updateCoords(position) : this.forceUpdate();
    });
  }

  componentDidUpdate(prevProps) {
    !this.props.ready && utils.getWeatherData(this.props.coords).then(data => {
      this.props.updateReady(true);
      this.props.updateWeather(data);
    });

  }

  render() {
      return (
        <div className="container">
          {!this.props.ready && <Loading />}
          <TopBar />
          <TabContent />
        </div>
      );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
