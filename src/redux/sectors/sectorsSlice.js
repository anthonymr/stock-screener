import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  sectors: [],
};

/* export const fetchSectors = createAsyncThunk(
  'sectors/fetchSectors',
  () => axios.get('https://financialmodelingprep.com/api/v3/sectors-performance?apikey=00f479b90863fc0a4b6b6dbedb775576'),
); */

export const fetchSectors = createAsyncThunk(
  'sectors/fetchSectors',
  async () => {
    const response = await axios.get('https://financialmodelingprep.com/api/v3/sectors-performance?apikey=00f479b90863fc0a4b6b6dbedb775576');
    return response.data;
  },
);

const sectorsSlice = createSlice({
  name: 'sectors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSectors.fulfilled, (state, { payload }) => (
      {
        ...state,
        loaded: true,
        sectors: payload,
      }
    ));
  },
});

// export const { } = sectorsSlice.actions;
export default sectorsSlice.reducer;