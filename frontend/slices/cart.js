import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isCartOpen: false,
	cartItems: []
};

const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCartItems(state, action) {
			state.cart.cartItems = action.payload;
		},
		setIsCartOpen(state, action) {
			state.cart.isCartOpen = action.payload;
		},
	}
})

export const { reducer } = slice;