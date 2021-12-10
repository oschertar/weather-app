import Lottie from 'react-lottie-player';
import { React, useState, useEffect, useCallback } from 'react';

import { UilTemperaturePlus, UilTemperatureMinus } from '@iconscout/react-unicons';
import Indicator from './Indicator';


function CurrentWeather(
    { weather }
) {

	const [animationData, setAnimationData] = useState();

	
	console.log(weather);
	
	
	useEffect(() => {
		import(`./../../assets/iconsWeather/${weather.weather[0].icon}.json`).then(setAnimationData);
		
		
  	}, [weather.weather]);
    
    return (
        <>
			<div className="w-1/2 mt-8 px-12 py-10 text-neutral-600 relative rounded-3xl bg-blue-300">
				<h3 className="text-xl text-center">Tiempo Actual</h3>
				<div className="w-full mt-5  flex">
					<div className="w-1/2 pt-12">
						<span className="text-5xl">{Math.round(weather.temp)}º C</span>
						<span className="text-3xl block capitalize mt-2">{weather.weather[0].description}</span>
					</div>
					
					<div className='w-1/2'>
					
						{animationData ?
							<div className="grid place-items-end  mx-auto my-0">
								<Lottie loop play animationData={animationData} />
							</div> : null}
					</div>
						
					
					
					
					
				</div>

				<div class="grid grid-col-3 grid-flow-col gap-4 text-center mt-6">
					<Indicator unity={`${weather.pressure} mb`} name="Presión" colorText="white" colorBg="blue-900"/>
					<Indicator unity={`${weather.visibility/1000} km`} name="Visibilidad" colorText="blue-900" colorBg="green-400"/>
					<Indicator unity={`${weather.humidity}%`} name="Humedad" colorText="blue-900" colorBg="white"/>
				</div>

				{/* <div className="grid grid-cols-2 text-center mt-10">
					<div className="grid grid-flow-col auto-cols-max text-center">
						<UilTemperatureMinus />
						<span>{Math.round(moreData.temp.min)}º</span>
					</div>
					<div className="grid grid-flow-col auto-cols-max text-center">
						<UilTemperaturePlus color="red" />
						<span>{Math.round(moreData.temp.max)}º</span>
					</div>
				</div> */}
				
			</div>
		</>
    )
}

export default CurrentWeather;
