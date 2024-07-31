import { configureStore } from "@reduxjs/toolkit";
import { sliceBlog } from "./sliceblog/sliceblog";

export const store = configureStore({
    reducer:{
        blogs: sliceBlog.reducer
    }
})