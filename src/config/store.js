import { configureStore } from '@reduxjs/toolkit'
import gameData from './gameDataSlice'

export const store = configureStore({
    reducer: {
        gameDataSlice: gameData,
    },
})