import React from "react";
import axios from 'axios';

const apiKey = '216ae6d43669c66411d72d97cb3bf65c';
const url = 'http://api.openweathermap.org/data/2.5/weather';

const convertF = (temp: any) => {
	const celsius = temp - 273.15;
	// const fahrenheit = (celsius * 1.8) + 32;
	return celsius.toFixed(2) + '℉';
}
export const getWeatherData = (city: string) => {
	return new Promise((resolve, reject) => {
			axios.get(url, {
			params: {
				q: city,
				appid: apiKey
			}
		}).then( (res: any) => {
			const data = {
				name: res.data.name, 
				description: res.data.weather[0].description, 
				wind: res.data.wind.speed + 'mph', 
				feels_like: convertF(res.data.main.feels_like),
				cur_temp: convertF(res.data.main.temp)
			};
			resolve(data);
		}).catch( (err: any) => reject(err))
	});
}
