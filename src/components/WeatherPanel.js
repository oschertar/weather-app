import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";

function WeatherPanel(
	{ weather, forecast } 
) {

  
    return (weather !== null && forecast !== null  ?
        <>
			<CurrentWeather weather={weather} />
			<DailyWeather forecast={forecast} />
        </>
    : null);
}



export default WeatherPanel;