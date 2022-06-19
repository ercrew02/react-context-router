import { configureStore } from '@reduxjs/toolkit';
import CountSlice from './count-slice';
import FetchUser from './fetchUser-slice';
import LoginSlice from './login-slice';

export const store = configureStore({
  reducer: {
    count: CountSlice,
    user: FetchUser,
    login: LoginSlice,
  },
});
