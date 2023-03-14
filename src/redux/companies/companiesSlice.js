import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL, APIKEY, COMPANIESENDPOINT } from '../../key';

const initialState = {
  companies: [],
  filter: '',
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
    setFilter: (state, { payload }) => (
      {
        ...state,
        filter: payload,
      }
    ),
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

export const { setFilter } = companiesSlice.actions;
export default companiesSlice.reducer;
