import produce from 'immer';
import createReducer from './reducerUtils';
const initialState = {
    cityChoose: {
        idUser: "",
        cityName: "Tel-Aviv",
        weatherText: "sunny ",
        idName: "90",
        temp: 34,
    },

    regions: [null],
    favourites:[null],

}
const weather = {
    setItem(state, action) {

        state.cityChoose[action.payload.name] = action.payload.value
    },
    setAllItem(state, action) {
         
        state.cityChoose = action.payload

    },
    addToRegions(state, action) {
        state.regions = action.payload;
    },
    addFavourites(state , action) {
         
        state.favourites = action.payload;
    },

};
export default produce((state, action) => createReducer(state, action, weather), initialState);
