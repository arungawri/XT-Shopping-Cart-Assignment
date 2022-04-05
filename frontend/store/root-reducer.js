import { combineReducers } from '@reduxjs/toolkit';
import { reducer as userReducer } from '../slices/user';
import { reducer as cartReducer } from '../slices/cart';

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});
