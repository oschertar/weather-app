import { React, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import _debounce from 'lodash/debounce';

import logo from './../assets/logo.png';
import { UilEstate } from '@iconscout/react-unicons'
import CurrentWeather from "./../components/desktop/CurrentWeather";
import ForecastWeather from "./../components/desktop/ForecastWeather";



export default function MainDesktop() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
    
    const handleChange = event => {
        //setCity(event.target.value);
        debounceFn(event.target.value);
    };


    const getData = (city) => {
        api.getLatAndLongByCity(city).then((response) => {
            let lat, lon;
            // if (response.data[1] && response.data[0].name.includes("Prov")) {
            //     lat = response.data[1].lat;
            //     lon = response.data[1].lon;

            //      setCity(response.data[1].local_names.es);
            // } else {
            //     lat = response.data[0].lat;
            //     lon = response.data[0].lon;
            //      setCity(response.data[0].local_names.es);
            // }

            lat = response.data[0].lat;
            lon = response.data[0].lon;

            let city = response.data[0].name;
            if(response.data[0].local_names?.es) 
                city = response.data[0].local_names.es;
            setCity(`${city}, ${response.data[0].country}`);
            setCoordinates((prevState) => ({
                ...prevState,
                lat:  lat,
                lon: lon
            }));    
            console.log(lat, lon);
            console.log(city);        
          
        }).catch((error) => {
            console.log(error)
            setCoordinates(null);
            setCity(null);

        });

       
       
    }

    const debounceFn = useCallback(_debounce(getData, 1000), []);
  
    
    useEffect(() => {
        if (coordinates && coordinates.lat !== "" && coordinates.lon !== "" ) {
            api.getCurrentWeather(coordinates).then((response) => {  
                setWeather(response.data)
                
            }).catch((error) => {
                console.log(error)
                setWeather(null);

            });
        }
    }, [coordinates]);

    return (
        <div className="relative min-h-screen flex w-full">
            <div className='vertical-navbar pt-4 bg-blue-400 '>
                <div className='main-logo pb-5 border-b border-blue-300 grid place-items-center'>
                    <img src={logo} className=' w-1/2 center' alt="logo principal"/>
                </div>
                <div className='nav mt-5'>
                    <UilEstate size="30" color="#FFF"/>
                </div>
            </div>
            <div className="main flex">

                <div className="bg-white  w-4/5 py-9 px-12">
                    <div className="w-full flex">
                        <div className="relative focus-within:text-gray-600 w-2/3 flex items-center">
                            <h1 className='text-3xl'>{city ? city : "Tu Tiempo"}</h1>
                        </div>
                        <label className="relative focus-within:text-gray-600  w-1/3">
                            <input type="text" className="h-14 w-full pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Buscar ciudad..." onChange={handleChange}/>
                            {/* <UilSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-5" viewBox="0 0 20 20" fill="currentColor" /> */}
                            <div className="absolute top-4 right-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </label>
                    </div>
                    

                    <div className='w-full flex'>
                        {weather && city ? <CurrentWeather weather={weather.current}  /> : null}
                        <div className='w-1/2'>
                            Test
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 w-1/5 p-8">
                    {/* {weather && city ? <ForecastWeather daily={weather.daily}  /> : null} */}
                </div>
            </div>
        </div>
    )
}
