import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL, APIKEY, SECTORSENDPOINT } from '../../key';

const initialState = {
  sectors: [],
};

export const fetchSectors = createAsyncThunk(
  'sectors/fetchSectors',
  async () => {
    const link = `${URL}${SECTORSENDPOINT}?apikey=${APIKEY}`;
    const response = await axios.get(link);
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
        sectors: payload,
      }
    ));
  },
});

export default sectorsSlice.reducer;
