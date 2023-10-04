import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populateAllCars } from './db/features/cars';
import data from './data.json'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/landingPage';
import CarDetails from './components/carDetails';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(populateAllCars(data))
  }, [])

  return (
    <div className='p-5 bg-gray-200 h-full overflow-y-scroll'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/carDetails/:id' element={<CarDetails />} />
      </Routes>
    </div>
  )
}

export default App
