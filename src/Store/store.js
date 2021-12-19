import { createStore, combineReducers } from 'redux';
import appReducer from './reducers/appReducer';


// const reducer = combineReducers({
//     WeatherReducer
// });
// const store = createStore(reducer);
const store = createStore(appReducer );

window.store = store;
export default store;


// import { createStore, combineReducers, applyMiddleware,compose  } from 'redux';
// import appMiddleware from './middleware/appMiddleware'
// import appReducer from './reducers/appReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(appReducer,composeEnhancers(applyMiddleware(...appMiddleware)) );

// window.store = store;
// export default store;

