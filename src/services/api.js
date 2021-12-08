import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_WEATHER_URL,

    params: {
        'appid': process.env.REACT_APP_API_WEATHER_KEY,
        'lang': 'es',

    }
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    /*getCurrentWeather: (city) =>
        instance({
            'method': 'GET',
            'url': `/current`,
            'params': {
                'city': city,
                'include': 'minutely',
                'country': 'es',
            },
        }),
    getForecast: (city) =>
        instance({
            'method': 'GET',
            'url': `/forecast/daily`,
            'params': {
                'city': `${city},ES`
            }
        })*/
    getLatAndLongByCity: (city) =>
         instance({
            'method': 'GET',
            'url': `/geo/1.0/direct`,
            'params': {
                'q': city,
                'limit': 2,
                'country': 'es',
            },
        }),
    getCurrentWeather: ({ lat, lon }) =>
        instance({
            'method': 'GET',
            'url': `/data/2.5/onecall`,
            'params': {
                'lat': lat,
                'lon': lon,
                'lang': 'es',
                'units': 'metric'
            },
        }),
}