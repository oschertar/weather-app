function CurrentWeather(
    { weather }
) {

	
    
    return (
        <div className="flex justify-center font-sans">
				<div
					className="card  min-w-sm max-w-sm border border-gray-100 bg-gray-50 mt-5 shadow-2xl  transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-blue-600 text-purple-50 rounded-md">
					<h2 className="text-md mb-2 px-4 pt-4">
						<div className="flex justify-between">
							<div className="badge relative top-0">
								<span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 font-sans">{weather.data[0].city_name}</span></div>
							<span className="text-lg font-bold ">{weather.data[0].ob_time.split(" ")[1]}</span>
						</div>
					</h2>
				
					<div className="flex items-center p-4">
						<div className="flex justify-center items-center w-96">
							<img style={{ margin: "0 auto" }} src={`https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`} alt={`Tiempo en ${weather.data[0].city_name}`} />
						</div>
					</div>
					<div className="text-md pt-4 pb-4 px-4">
						<div className="flex justify-between items-center">
							<div className="space-y-2">
							<span className="flex space-x-2 items-center">
								<svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
									<path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
									<path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
								</svg>
								<span>{weather.data[0].wind_spd}km/h</span>
							</span>
							<span className="flex space-x-2 items-center">
								<svg height="20" width="20" viewBox="0 0 32 32" className="fill-current">
									<path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
									<path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
								</svg>
								<span>{weather.data[0].rh}%</span>
							</span>
							</div>
							<div>
								<h1 className="text-5xl"> {weather.data[0].temp}º C </h1>
							</div>
						</div>
					</div>
				</div>
			</div>
    )
}

export default CurrentWeather;
