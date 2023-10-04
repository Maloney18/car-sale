import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allCars: [],
    searchCars: [],
    empty: false
}

const db = createSlice({
    name:'db',
    initialState,
    reducers: {
        populateAllCars : (state, action) => {
            state.allCars = action.payload
        },

        populateSearch : (state, action) => {
            state.searchCars = state.allCars.filter(car => car.make.toLowerCase().includes(action.payload))

            state.empty = state.searchCars.length === 0 ? true : false
        },

        clearSearch: (state) => {
            state.searchCars = []
        },

        toggleFavorite: (state, action) => {
            state.allCars = state.allCars.map(car => car.id === action.payload ? {...car, favorite: !car.favorite} : {...car})
        },
        
        resetEmpty: (state) => {
            state.empty = false
        }
    }
})

export default db.reducer;

export const {populateAllCars, populateSearch, clearSearch, toggleFavorite, resetEmpty} = db.actions