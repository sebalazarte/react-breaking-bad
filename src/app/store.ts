import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import castReducer from '../features/characters/castSlice';

export const store = configureStore({
  reducer: {
    cast: castReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
