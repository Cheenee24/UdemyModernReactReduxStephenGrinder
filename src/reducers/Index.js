import { combineReducers } from 'redux';
import ReducerWeather from './ReducerWeather';

const rootReducer = combineReducers({
  weather: ReducerWeather
});

export default rootReducer;
