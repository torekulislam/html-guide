import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    language: "BN",
}

const htmlSlice = createSlice({
    name: "htmlStore",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export const { changeLanguage } = htmlSlice.actions;
export default htmlSlice.reducer;

