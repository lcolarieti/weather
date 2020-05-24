import {
  UPDATE_COORDS,
  UPDATE_READY,
  UPDATE_WEATHER,
  UPDATE_ACTIVE_TAB
} from '../constants/constants';

const initialState = {
  ready: false,
  coords: {
    lat: '41.89193',
    lon: '12.51133'
  },
  weather: null,
  activeTab: 0
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_COORDS:
      return Object.assign({}, state, {coords: action.coords});
    case UPDATE_READY:
      return Object.assign({}, state, {ready: action.ready});
    case UPDATE_WEATHER:
      return Object.assign({}, state, {weather: action.weather});
    case UPDATE_ACTIVE_TAB:
      return Object.assign({}, state, {activeTab: action.activeTab});
    default:
      return state;
  }

}


export default rootReducer;
