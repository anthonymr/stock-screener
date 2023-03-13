import { configureStore } from '@reduxjs/toolkit';
import sectorsReducer from './sectors/sectorsSlice';
import companiesReducer from './companies/companiesSlice';

const store = configureStore({
  reducer: {
    sectors: sectorsReducer,
    companies: companiesReducer,
  },
});

export default store;
