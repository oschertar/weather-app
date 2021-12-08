import Lottie from 'react-lottie-player';
import { React, useState, useEffect, useCallback } from 'react';

import { UilTemperaturePlus, UilTemperatureMinus } from '@iconscout/react-unicons';



function CurrentWeather(
    { weather, city, moreData }
) {

	const [animationData, setAnimationData] = useState();

	
	console.log(moreData);
	
	
	useEffect(() => {
		import(`./../../assets/iconsWeather/${weather.weather[0].icon}.json`).then(setAnimationData);
		
		
  	}, [weather.weather]);
    
    return (
        <>
			<div className="w-full mt-8 p-4 text-white relative">
				<h3 className="text-3xl text-center">{city}</h3>
				<div className="w-full mt-5  pt-5">
					<div className="absolute right-4">
						<span className="text-4xl text-center">{Math.round(weather.temp)}</span>
						<span className="text-xl text-center absolute top-0">º</span>
					</div>
					{animationData ?
						<div className="grid place-items-center  mx-auto my-0">
							<Lottie loop play animationData={animationData} />
						</div> : null}
						
					
					<span className="text-2xl text-center block capitalize mt-5">{weather.weather[0].description}</span>
					
					
				</div>

				<div className="grid grid-cols-2 text-center mt-10">
					<div className="grid grid-flow-col auto-cols-max text-center">
						<UilTemperatureMinus />
						<span>{Math.round(moreData.temp.min)}º</span>
					</div>
					<div className="grid grid-flow-col auto-cols-max text-center">
						<UilTemperaturePlus color="red" />
						<span>{Math.round(moreData.temp.max)}º</span>
					</div>
				</div>
				
			</div>
		</>
    )
}

export default CurrentWeather;
