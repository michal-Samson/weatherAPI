
import React from 'react';
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { actions } from '../../Store/actions';
import './home.css';
import env from '../../env.env'
export default function Home() {
  const cityChoose = useSelector(state => state.WeatherReducer.cityChoose)


  const regions = useSelector((state) => state.WeatherReducer.regions);
  const dispatch = useDispatch();
  const [degree, setDegree] = useState("c");
  const [to, setTo] = useState("f");
  const [nameCity, setNameCity] = useState("");

  const BASE_URL = "http://dataservice.accuweather.com/"
  const SHERCH_CITY = "locations/v1/cities/autocomplete?"

  const CURRENT_WEATHER = "http://dataservice.accuweather.com/currentconditions/v1/"
  const API_KEY = "apikey=G2zVeiJtARitzgfWgp96KsAvvkQju4XL"

  const searchCity = async (event) => {
     
    setNameCity(event.target.value)

debugger
    //Request to api autocomplete cities
    const res = await axios.get(`${BASE_URL}${SHERCH_CITY}${API_KEY}&q=${event.target.value}&language=en-us`)
    //set the regiins
    dispatch(actions.addToRegions(res.data))

  }


  const chooseCity = async (city) => {
     debugger
    setNameCity(city.LocalizedName)


    //Request to api currentWeather by key
    const res1 = await axios.get(`${CURRENT_WEATHER}${cityChoose.idName}?${API_KEY}&details=true`);

    let y = res1.data[0].Temperature.Metric.Value;
    y = Math.round(y);

    dispatch(actions.setItem({ "name": "cityName", "value": city.LocalizedName }));
    dispatch(actions.setItem({ "name": "idName", "value": city.Key }));
    dispatch(actions.setItem({ "name": "weatherText", "value": res1.data[0].WeatherText }));
    dispatch(actions.setItem({ "name": "temp", "value": y }));

  }

  function addFavourites(favorite) {
     

    console.log(favorite);
    axios.post('https://localhost:44342/FavoriteCitys/AddCity', favorite)
      .then((list) => {
         
        if (list.data == "yes") {
          dispatch(actions.setAllItem(favorite));
        }
        else{
          alert(" The city is already on your list of favorite cities")
        }
      },
        (error) => {
          console.log(error)
        })
  }




  function convert(e) {
     
    if (e === 'c') {
      dispatch(actions.setItem({ "name": "temp", "value": (Math.round(cityChoose.temp * 9 / 5) + 32) }));
      setDegree("f")
      setTo("c")
    }
    else {
      dispatch(actions.setItem({ "name": "temp", "value": (Math.round((cityChoose.temp - 32) * 5 / 9)) }));
      setDegree("c")
      setTo("f")

    }


  }
  return (

    <>
      <div className="container">
        <div className="row">
          <center>
            <div className="col">

            </div>
          </center>

        </div>


        <div className="col-sm-12 container">
          <br></br>
          <div className="card text-center  row bshadow  " style={{ flexFlow: 'row', height: "500px !important" }}   >
            <div className="col-sm-4  font shasowHome"> Search For Arae:
              <br></br>
              <input onChange={searchCity} value={nameCity} />
              <br></br>
              {regions != '' && regions.map(item => (
                <div id="aaa" >
                  <a id="areaToChoose" onClick={() => chooseCity(item)}>{item.LocalizedName}</a>
                  <br></br>
                </div>
              ))}
            </div>
            <div className='col-sm-8'>
              <div className="font shasowHome h1 "  >
                <center >{cityChoose.cityName}</center>
              </div>
              <h5 className='font shasowHome' >{cityChoose.temp}{degree} <button style={{ borderRadius: '50%', width: '2rem', height: '2rem' }} onClick={() => convert(degree)}>{to}</button></h5>
              <p className="font shasowHome">{cityChoose.weatherText}</p>
              <button className="btn btn-primary bshadow fontButtonds" style={{ backgroundColor: 'black' }}
                onClick={() => addFavourites(cityChoose)}>Add to favourites</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
