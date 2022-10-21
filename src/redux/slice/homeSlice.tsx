import {createSlice} from '@reduxjs/toolkit';

const inititalState = {
  dataList: null,
};

export const HomeSlice = createSlice({
  name: 'Home',
  initialState: inititalState,
  reducers: {
    GetData(state, action) {
      state.dataList = action.payload;
    },
  },
});

export const HomeAction = HomeSlice.actions;
