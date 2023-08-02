import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add:(state, action)=>{
            // console.log('WE are adding items', action.payload)
            // state.push(action.payload)
            const itemInCart = state.find((item)=> item.id == action.payload.id)
            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.push({...action.payload, quantity: 1})
            }
            
        },
        incrementQuantity:(state, action)=>{
                const itemInCart = state.find((item)=> item.id == action.payload.id)
                itemInCart.quantity++;
        },
        decrementQuantity: (state, action)=>{
            const itemInCart = state.find((item)=> item.id !== action.payload.id)
            if(itemInCart.quantity == 1){
                const removeFromCart = state.filter((item)=> item.id !== action.payload.id)
                state = removeFromCart
            }else{
                itemInCart.quantity--;
            }
        },
        remove:(state, action)=>{
            console.log("This is removing item", action.payload.id)
            const removeFromCart = state.filter((item)=> item.id !== action.payload.id)
            state = removeFromCart
        }
    }
})
export const {add, remove, incrementQuantity, decrementQuantity} = cartSlice.actions
export default cartSlice.reducer