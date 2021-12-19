import { combineReducers } from 'redux';

import WeatherReducer from './weatherReducer';
const appReducers = combineReducers({
    WeatherReducer:WeatherReducer,
    

});

export default appReducers;