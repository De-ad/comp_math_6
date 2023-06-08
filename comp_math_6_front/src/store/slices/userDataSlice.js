import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value : []
}

export const userDataSlice = createSlice({
    name: 'dots',
    initialState,
    reducers: {
        setDots : (state,action) => {
            state.value = action.payload;
        }
    }
})

export const {setDots} = userDataSlice.actions
export default userDataSlice.reducer