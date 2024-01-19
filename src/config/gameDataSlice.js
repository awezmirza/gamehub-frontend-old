import { createSlice } from "@reduxjs/toolkit";

export const gameDataSlice = createSlice({
    name: 'gameData',
    initialState: { value: null },
    reducers: {
        setGameData: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { setGameData } = gameDataSlice.actions

export default gameDataSlice.reducer