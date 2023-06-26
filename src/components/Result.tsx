import React, { useEffect, useState, useContext } from 'react';
import { getWeatherData } from '../api/getWeather';
import { cityContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = () => {
	const [ weather, setWeather ] = useState<any>();
	const { city, setCity } = useContext(cityContext);

	useEffect(() => {
		if(city != '') {
			getWeatherData(city).then((data: any) => {
				setWeather(data)
			}).catch((err: any) => {
				toast(err.response.data.message)
			});
		}
	}, [city])

  return (
		<div className='container mx-auto w-[300px] mt-8 flex gap-2 flex-col'>
			<div className='flex flex-row'>
				<p className='font-bold w-[120px] text-left leading-[40px]'>City:</p>
				<p className='text-left leading-[40px] text-[30px] font-bold'>{weather?.name}</p>
			</div>

			<div className='flex flex-row'>
				<p className='font-bold w-[120px] text-left leading-[20px]'>Description:</p>
				<p className='text-left leading-[20px]'>{weather?.description}</p>
			</div>

			<div className='flex flex-row'>
				<p className='font-bold w-[120px] text-left leading-[20px]'>Current Temp:</p>
				<p className='text-left leading-[20px]'>{weather?.cur_temp}</p>
			</div>

			<div className='flex flex-row'>
				<p className='font-bold w-[120px] text-left leading-[20px]'>Feels like:</p>
				<p className='text-left leading-[20px]'>{weather?.feels_like}</p>
			</div>

			<div className='flex flex-row'>
				<p className='font-bold w-[120px] text-left leading-[20px]'>Wind speed:</p>
				<p className='text-left leading-[20px]'>{weather?.wind}</p>
			</div>

			<ToastContainer />
		</div>
	)
}

export default Result;