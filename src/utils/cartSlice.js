import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items : ['Apple', 'Banana']
    },
    reducers: {
        addItem: (state,action) =>{
            console.log(action)
            state.items.push(action.payload)
        },
        removeItem : (state,action) =>{
            state.items.pop();
        },
        clearCart: (state)=>{
            state.items= [];
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer; //helps to combine all the reducers. it is provided by Redux Toolkit