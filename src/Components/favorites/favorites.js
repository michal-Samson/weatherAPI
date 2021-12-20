
import React, { useState ,useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { actions } from '../../Store/actions';
export default function Favorites() {
  const dispatch = useDispatch();
  const cityFavorites = useSelector((state) => state.WeatherReducer.favourites);

  const toHomePage = async (item) => {

    //set the current values to cityName and waetherText
    dispatch(actions.setItem({ "name": "cityName", "value": (item.cityName) }));
    dispatch(actions.setItem({ "name": "weatherText", "value": (item.weatherText) }));
    dispatch(actions.setItem({ "name": "temp", "value": (item.temp) }));
  }
  function deleteFromFavourites(idUser, idName) {
     
    let id={idUser:idUser,idName:idName}
    axios.delete(`https://localhost:44342/FavoriteCitys/DeleteCityById?id=${idUser}@${idName}`)
      .then((listCity) => {
         
        dispatch(actions.addFavourites(listCity["data"]))
      }, (error) => {
        console.log(error);
      })
    }

  function getFavoriteCitys() {
     

    axios.get(`https://localhost:44342/FavoriteCitys/get?id=${document.cookie}`)
      .then((listCity) => {
         
        dispatch(actions.addFavourites(listCity["data"]))

      })
  }
  return (
    <div>
      <button className=' font'  onClick={getFavoriteCitys}>You have {cityFavorites.length} favorite cities</button>

        

        <div className='row'>
        <br></br>
        {cityFavorites != '' && cityFavorites.map((item, index) => 
         (

            <div className='col-sm-2' style={{ width: '15rem' }}  >
              <div className='card bshadow'>
            <div  >
            <h5 className='card-title  fontButtonds' onClick={() => toHomePage(item)}>{item.cityName}</h5>
                  <p className='card-text fontButtonds' style={{ fontSize: '15px' }}   >{item.temp}{item.weatherText}</p> 
              <button className='btn btn-danger bshadow fontButtonds' style={{ backgroundColor: 'black', fontSize: '13px' }}
                onClick={()=>deleteFromFavourites(item.idUser, item.idName)}>
                Remove From Favourites
              </button> 
           </div>
            </div>

            </div>

          )
        )}
        </div>

    </div>
  )
}

