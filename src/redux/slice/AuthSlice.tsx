import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: null,
  token: '',
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState: initialState,
  reducers: {
    LoginData(state, action) {
      state.data = action.payload;
    },
  },
});

export const AuthAction = AuthSlice.actions;
