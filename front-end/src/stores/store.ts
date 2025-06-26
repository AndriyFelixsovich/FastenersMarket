import { configureStore } from "@reduxjs/toolkit";
import { homeApiSlice } from './slices/homeApiSlice';

export const store = configureStore({
	reducer: {
		[homeApiSlice.reducerPath]: homeApiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(homeApiSlice.middleware)
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;