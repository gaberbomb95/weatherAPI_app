import React, { useContext } from 'react';
import { cityContext } from '../App';
import { useForm } from 'react-hook-form';

type FormData = {
	cityName: String;
};

const FormCom = () => {
	const { city, setCity } = useContext(cityContext);
	const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

	const onSubmit = (data: any) => {
		setCity(data.cityName)
	}

  return (
		<div className='container mx-auto mt-8'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col w-[300px] mx-auto border shadow-xl text-left p-8 gap-2'>
					<label className='text-lg font-bold'>City</label>
					<input className='border border-black text-lg p-2' type="text" {...register('cityName')} required/>
					<input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer' type="submit" value="Search"
					/>
				</div>
			</form>
		</div>
	)
}

export default FormCom;