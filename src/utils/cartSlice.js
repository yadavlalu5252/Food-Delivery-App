import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'card',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            // mutating the state directly is allowed in Redux Toolkit
            state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});


export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;