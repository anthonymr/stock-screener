import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  companies: [],
};

export const fetchCompanies = createAsyncThunk(
  'companies/getCompanies',
  async (sector) => {
    const link = 'https://financialmodelingprep.com/api/v3/stock-screener?';
    const key = '00f479b90863fc0a4b6b6dbedb775576';
    const url = `${link}sector=${sector}&apikey=${key}`;
    const response = await axios.get(url);
    return response.data;
  },
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => (
      {
        ...state,
        companies: [],
      }
    ));
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }) => (
      {
        ...state,
        companies: payload,
      }
    ));
  },
});

export default companiesSlice.reducer;
