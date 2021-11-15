import axios from 'axios'
// Create instance called instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_WEATHER_URL,

    params: {
        'key': process.env.REACT_APP_API_WEATHER_KEY,
        'lang': 'es',

    }
});
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getCurrentWeather: (city) =>
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
        })
}