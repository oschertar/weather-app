import { React, useState, useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { UilTemperaturePlus, UilTemperatureMinus } from '@iconscout/react-unicons'
import AnimatedNumber from "animated-number-react";


export default function Daily({ day }) {
    const [dateFormated, setDateFormated] = useState("");
    const [animationData, setAnimationData] = useState();
    
    const formatValue = (value) => value.toFixed(0);

    useEffect(() => {
        setDateFormated(new Intl.DateTimeFormat('es-ES', {  weekday: "long" }).format(day.dt * 1000))
       
    }, [day.dt]);

    useEffect(() => {
		import(`./../../assets/iconsWeather/${day.weather[0].icon}.json`).then(setAnimationData);
		
		
  	}, [day.weather]);

    return (
        <div className="p-3">
            <h4 className="text-base capitalize text-center">{dateFormated}</h4>
            {animationData ?
                <div className="grid place-items-center w-12 mx-auto my-0">
                    <Lottie loop play animationData={animationData} />
                </div> : null}
            <span className="block text-center mt-4 text-sm">
                <UilTemperatureMinus className="inline" />
                <AnimatedNumber
                    value={ parseInt(day.temp.min) }
                    formatValue={ formatValue }
                />º C
            </span>
            <span className="block text-center mt-4 text-sm">
                <UilTemperaturePlus className="inline" color="red" />
                <AnimatedNumber
                    value={ parseInt(day.temp.max) }
                    formatValue={ formatValue }
                />º C
                
            </span>
        </div>
    )
}
