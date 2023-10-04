import { configureStore } from "@reduxjs/toolkit";
import db from '../features/cars'

const store = configureStore({
    reducer: {
        db
    }
})

export default store