import { configureStore } from "@reduxjs/toolkit";
import htmlSlice from "../../features/html/store/htmlSlice";
export const store = configureStore({
    reducer: { htmlStore: htmlSlice },
})