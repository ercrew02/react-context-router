import { createSlice } from '@reduxjs/toolkit';

export const fetchUser = createSlice({
  name: 'fetchUser',
  initialState: {
    user: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = fetchUser.actions;
export default fetchUser.reducer;
