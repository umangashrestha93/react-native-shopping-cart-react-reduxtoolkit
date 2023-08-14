import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        accessToken: null
    },
    reducers:{
        setToken:(state, action)=>{
            state.accessToken = action.payload;
        },
        removeToken:(state,)=>{
            state.accessToken = null
        }
    }
})
export const {setToken, removeToken} = userSlice.actions;
export default userSlice.reducer