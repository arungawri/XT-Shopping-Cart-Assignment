import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../slices/user';
import cartReducer from '../slices/cart';

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});
