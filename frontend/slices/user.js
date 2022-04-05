import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentUser: null
};

const slice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser(state, action) {
			state.user = action.payload;
		},
	}
})

export const { reducer } = slice;