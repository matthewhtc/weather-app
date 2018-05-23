import axios from 'axios'; 

// fancy ES6 template strings to clean up code; need back ticks "`" for template strings. 
const API_KEY = '15ad22ca9419d2e1178a52614f475956'; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

/* rmb action creators always have to return an action;
 * an action is an object which always has to have a type. 
 * 
 * reason we are extracting 'fetch_weather' into a variable is to keep our
 * action types consistent between our action creators and reducers. so you dont
 * have to be copy and pasting strings into different files (i.e. reducers). 
 * in a sense, it is more modular. 
 */
export const FETCH_WEATHER = 'FETCH_WEATHER'; 

// export so it can be used in other files, ofc
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`;
	const request = axios.get(url); // this part returns a PROMISE

	// console.log('Request:', request); 

	return {
		type: FETCH_WEATHER, 
		payload: request // returning promise as payload. 
	};
}