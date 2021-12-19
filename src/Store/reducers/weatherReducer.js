import produce from 'immer';
import { actions } from '../actions';
import createReducer from './reducerUtils';
const initialState = {
    cityChoose: {
        idUser: "",
        cityName: "Tel-Aviv",
        weatherText: "sunny ",
        idName: "90",
        temp: "34",
    },

    regions: [],


}
const weather = {
    setItem(state, action) {

        state.cityChoose[action.payload.name] = action.payload.value
    },
    setAllItem(state, action) {
        state.cityChoose = action.payload

    }

    ,
    addToRegions(state = initialState, action) {
        state.regions = action.payload;

    },

};
export default produce((state, action) => createReducer(state, action, weather), initialState);
