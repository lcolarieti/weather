import {
  UPDATE_COORDS,
  UPDATE_READY,
  UPDATE_WEATHER,
  UPDATE_ACTIVE_TAB
} from '../constants/constants';

export const updateCoordsAction = (coords) => {
  return (dispatch) => {
      dispatch({type: UPDATE_COORDS, coords: coords});
  }
}

export const updateReadyAction = (ready) => {
  return (dispatch) => {
      dispatch({type: UPDATE_READY, ready: ready});
  }
}

export const updateWeatherDataAction = (data) => {
  return (dispatch) => {
      dispatch({type: UPDATE_WEATHER, weather: data});
  }
}

export const updateActiveTabAction = (index) => {
  return (dispatch) => {
      dispatch({type: UPDATE_ACTIVE_TAB, activeTab: index});
  }
}
