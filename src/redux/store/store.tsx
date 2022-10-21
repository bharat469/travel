import {configureStore} from '@reduxjs/toolkit';
import {AuthSlice} from '../slice/AuthSlice';
import {HomeSlice} from '../slice/homeSlice';

const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
    Home: HomeSlice.reducer,
  },
});

export default store;
