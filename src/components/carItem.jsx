import { useDispatch } from 'react-redux'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import { BsSpeedometer2 } from 'react-icons/bs'
import { BiGasPump } from 'react-icons/bi'
import { GiSteeringWheel } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { toggleFavorite } from '../db/features/cars'
import { useNavigate } from 'react-router-dom'

const CarItem = ({ details }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id,Image,make, model, year, fuel_consumption, no_of_seats, rent_price, fuel_type, transmission_type, favorite} = details

    return (
        <div className='bg-gray-100 rounded-md p-3 shadow-md flex flex-col gap-y-3 hover:shadow-none transition ease-out duration-500'>
            <div className='h-200 overflow-hidden rounded-xl'>
                <img className='w-full h-full object-cover object-center' src={Image} alt={`${make} ${model} ${year}`} />
            </div>

            <div className='flex flex-col gap-y-2.5 cursor-pointer' onClick={() => navigate(`/carDetails/${id}`, {state: details})}>
                <div className='flex items-center justify-between'>
                    <p className='text-black font-semibold text-xl '>{`${make} ${model}`}</p>  
                    <p className='border-dotted border-2 border-blue-400 font-semibold p-2 rounded-xl'>{year}</p>
                </div>

                <div className='grid grid-cols-2 gap-5 border-b pb-5'>
                    <div className='flex gap-1.5 items-center'>
                        <IoPeopleCircleOutline className='fill-current text-blue-400 h-5 w-5'/>
                        <p className='font-semibold'>{`${no_of_seats} People`}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <BiGasPump className='fill-current text-blue-400 h-5 w-5'/>
                        <p className='font-semibold'>{fuel_type}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <BsSpeedometer2 className='fill-current text-blue-400 h-5 w-5'/>
                        <p className='font-semibold'>{fuel_consumption}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <GiSteeringWheel className='fill-current text-blue-400 h-5 w-5'/>
                        <p className='font-semibold'>{transmission_type}</p>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div>
                    <p className='font-bold text-xl'>{rent_price} <span className='font-normal text-sm'>/ month</span></p>
                </div>

                <div className='flex gap-x-5 items-center'>
                    <div className={`${favorite?'bg-red-100':'bg-blue-100'} p-2 rounded-xl cursor-pointer`} onClick={() => dispatch(toggleFavorite(id))}>
                        <AiOutlineHeart className={`fill-current ${favorite? 'text-red-400': 'text-blue-400'}`}/>
                    </div>

                    <button className='p-2 bg-blue-400 text-white font-semibold rounded-xl text-md hover:text-black hover:opacity-70 transition ease-out duration-500'>
                        Rent now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarItem