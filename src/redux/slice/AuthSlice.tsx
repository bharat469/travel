import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  token: null,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {
    LoginData(state, action) {
      state.data = action.payload;
    },
    SaveToken(state, action) {
      state.token = action.payload;
    },
  },
});

export const AuthActions = AuthSlice.actions;
