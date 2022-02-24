import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'


const rootReducer = {
    userSlice
}

const store = configureStore({
    reducer: rootReducer,
})

export default store