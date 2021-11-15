


function FavoriteCityElement(
	{ data } 
) {

    console.log(data);

    return (<>
        <div className="cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center pt-10 bg-white relative">
            <div className="icons absolute top-2 right-2 flex">
                <div className="icon-refresh" onClick={() => console.log("refresco")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
                <div className="icon-delete"  onClick={() => console.log("borro")}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                
            </div>
            <div className="text-md font-bold flex flex-col text-gray-900"><span className="uppercase">{data.city_name}</span> <span className="font-normal text-gray-700 text-sm">{data.ob_time}</span></div>
            <div className="w-16 h-16 flex items-center justify-center">
                <img style={{ margin: "0 auto" }} src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt={`Tiempo en ${data.city_name}`} />
            </div>
            <p className="text-gray-700 mb-2">{data.weather.description}</p>
            <div className="text-3xl font-bold text-gray-900 mb-6">{data.temp}º C</div>
            
        </div>
    </>);
}



export default FavoriteCityElement;