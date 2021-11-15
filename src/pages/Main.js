import { useState, useEffect, useCallback } from "react";

import api from '../services/api';


import WeatherPanel from "../components/WeatherPanel";
import FavoritesPanel from "../components/FavoritesPanel";

import _debounce from 'lodash/debounce';
export default function Main() {
   
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    
    const handleChange = event => {
        setCity(event.target.value);
        debounceFn(event.target.value);
    };

    const addCityToFavorites = () => {
        if (city !== "" && weather !== null) {
            if(window.localStorage.getItem(`weather_city_${city}`) === null )
                window.localStorage.setItem(`weather_city_${city}`, JSON.stringify(weather));
        }
    }

    const getData = (city) => {
        api.getCurrentWeather(city).then((response) => {
            setWeather(response.data)
            console.log(response)
        }).catch((error) => {
            console.log(error)
            setWeather(null);

        });
        api.getForecast(city)
            .then((response) => {
                setForecast(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const debounceFn = useCallback(_debounce(getData, 1000), []);
  
    
    useEffect(() => {


    }, []);
    
    return (
    <>
            <div className="md:container sm:mx-auto p-3 bg-blue-400 h-screen" >
                <div className="relative">
                    <div className="absolute top-4 left-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Buscar ciudad..." onChange={handleChange}/>
                    <div className="absolute top-2 right-2">
                        <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600" onClick={addCityToFavorites}>Guardar</button>
                    </div>
                </div>
               
                {weather ?  <WeatherPanel weather={weather} forecast={forecast} /> : <FavoritesPanel /> }
               
        </div>
    </>
    );
}
