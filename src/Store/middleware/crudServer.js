import store from './store'
import axios from 'axios';
import '../env.env'
import { ADD_FAVOURITES, } from '../actions/'

export const cradServer = store => next => action => {
    if (action.type === ADD_FAVOURITES) {
        debugger;
     axios.post(`https://localhost:44342/FavoriteCitys/AddCity/`,favorite)
     .then((d) => {
       console.log("!!" + d.data)
     },
       (error) => {
         console.log(error)
       })
    }

    
       return next(action)
}