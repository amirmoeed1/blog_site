import { createSlice } from "@reduxjs/toolkit";


export const sliceBlog = createSlice({
    name: "blogdata",
    initialState: {
        newblog:[]
    },
    reducers:{
        adddata: (state, action)=>{
            state.newblog = action.payload;
        }
    }
})

export const {adddata} = sliceBlog.actions;