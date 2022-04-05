import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentCart: null
};

const slice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		updateCart(state, action) {
			state.cart = action.payload;
		},
	}
})

export const { reducer } = slice;