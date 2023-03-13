import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL, APIKEY, COMPANYENDPOINT } from '../../key.js';

const initialState = {
  company: [],
};

export const fetchCompany = createAsyncThunk(
  'company/fetchCompany',
  async (symbol) => {
    const link = `${URL}${COMPANYENDPOINT}${symbol}?apikey=${APIKEY}`;
    const response = await axios.get(link);
    return response.data[0];
  },
);

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompany.pending, (state) => (
      {
        ...state,
        company: [],
      }
    ));
    builder.addCase(fetchCompany.fulfilled, (state, { payload }) => (
      {
        ...state,
        company: payload,
      }
    ));
  },
});

export default companySlice.reducer;
