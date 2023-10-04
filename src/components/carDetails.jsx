import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai"
import { IoPeopleCircleOutline } from 'react-icons/io5'
import { BsSpeedometer2 } from 'react-icons/bs'
import { BiGasPump } from 'react-icons/bi'
import { GiSteeringWheel } from 'react-icons/gi'
import { toggleFavorite } from "../db/features/cars"

const CarDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {allCars}  = useSelector(store => store.db)
    const {id, Image,make, model, year, fuel_consumption, no_of_seats, rent_price, fuel_type, transmission_type, description} = useLocation().state
    
    
    const car = allCars.find(car => car.id === id)
    const favorite = car.favorite

    const background = {
        backgroundImage: `linear-gradient(to top, #0000009e, #ffffff1c), url(${Image})`
    }

    return (
        <div className="flex flex-col h-screen relative pt-10 gap-5  md:gap-10">
            <div className="flex gap-2 items-center cursor-pointer absolute top-0 left-0" onClick={() => navigate('/')}>
                <AiOutlineArrowLeft />
                <p className="font-bold">Back</p>
            </div>
            
            <div style={background} className="w-full h-1/2 bg-center bg-cover flex justify-between p-2.5 items-end">
                <div className='flex md:flex-row flex-col md:items-center gap-2.5 md:gap-5 text-white'>
                    <p className=' font-bold text-xl md:text-3xl'>{`${make} ${model}`}</p>  
                    <p className='border-dotted border-2 border-blue-400 font-semibold p-2 rounded-xl max-w-max'>{year}</p>
                </div>

                <div className='flex flex-col md:flex-row gap-y-2.5 md:gap-5 items-end md:items-center'>
                    <div className={`${favorite?'bg-red-100':'bg-blue-100'} p-2 md:p-3 rounded-xl cursor-pointer`} onClick={() => dispatch(toggleFavorite(id))}>
                        <AiOutlineHeart className={`fill-current md:h-5 md:w-5 ${ favorite ? 'text-red-400': 'text-blue-400'}`}/>
                    </div>

                    <button className='p-2 md:p-3 bg-blue-400 text-white font-semibold rounded-xl text-md hover:text-black hover:opacity-70 transition ease-out duration-500'>
                        Rent now
                    </button>
                </div>
            </div>

            <div className="w-full flex-col md:flex-row items-start flex justify-between w gap-y-5">
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex gap-1.5 items-center'>
                        <IoPeopleCircleOutline className='fill-current text-blue-400 h-5 w-5 md:h-7 md:w-7'/>
                        <p className='font-semibold md:text-xl'>{`${no_of_seats} People`}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <BiGasPump className='fill-current text-blue-400 h-5 w-5 md:h-7 md:w-7'/>
                        <p className='font-semibold md:text-xl'>{fuel_type}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <BsSpeedometer2 className='fill-current text-blue-400 h-5 w-5 md:h-7 md:w-7'/>
                        <p className='font-semibold md:text-xl'>{fuel_consumption}</p>
                    </div>

                    <div className='flex gap-1.5 items-center'>
                        <GiSteeringWheel className='fill-current text-blue-400 h-5 w-5 md:h-7 md:w-7'/>
                        <p className='font-semibold md:text-xl'>{transmission_type}</p>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-2xl align-baseline'>{rent_price} <span className='font-semibold text-sm'>/ month</span></p>
                </div> 
            </div>

            <div>
                <p className=' font-bold text-xl md:text-3xl'>Description</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default CarDetails