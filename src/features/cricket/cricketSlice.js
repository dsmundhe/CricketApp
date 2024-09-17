import { createSlice } from "@reduxjs/toolkit";
import upcomingMatchs from './data'
const initialState = {
    name: "Dipak Mundhe",
    upcomingMatchs,
}

const cricketSlice = createSlice({
    name: 'cricket',
    initialState,
    reducers: {
        addData: (state, action) => {

        }
    }
});

export default cricketSlice.reducer;
export const { addData } = cricketSlice.actions;  
