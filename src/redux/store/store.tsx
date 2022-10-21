import {configureStore} from '@reduxjs/toolkit';
import {AuthSlice} from '../slice/AuthSlice';

const store = configureStore({
  reducer: {
    Auth: AuthSlice.reducer,
  },
});

export default store;
