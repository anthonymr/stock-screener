import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL, APIKEY, COMPANIESENDPOINT } from '../../key.js';

const initialState = {
  companies: [],
};

export const fetchCompanies = createAsyncThunk(
  'companies/getCompanies',
  async (sector) => {
    const link = `${URL}${COMPANIESENDPOINT}?sector=${sector}&apikey=${APIKEY}`;
    const response = await axios.get(link);
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
