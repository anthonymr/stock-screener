import { configureStore } from '@reduxjs/toolkit';
import sectorsReducer from './sectors/sectorsSlice';

const store = configureStore({
  reducer: {
    sectors: sectorsReducer,
  },
});

export default store;
