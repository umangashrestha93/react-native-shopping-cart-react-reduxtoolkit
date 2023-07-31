import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add(state, action){
            console.log('WE are adding items', action.payload)
            state.push(action.payload) 
            // state.push({
            //     item: action.payload,
            //     count: count + 1
            // }) 
        },
        remove(state, action){
            console.log("This is removing item", action.payload)
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})
export const {add, remove} = cartSlice.actions
export default cartSlice.reducer