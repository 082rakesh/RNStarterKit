import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import postReducer from './postSlice';
import { useDispatch } from 'react-redux';
import restaurantsReducer from './restuarantSlice';
import menuReducer from './menuSlice';

const appStore = configureStore({
	reducer: {
		cart: cartReducer,
		post: postReducer,
		restaurants: restaurantsReducer,
		menu: menuReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
	devTools: true,
});

export default appStore;
export type MainState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
