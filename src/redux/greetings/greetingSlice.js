import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const base_url = 'http://127.0.0.1:3000/messages';

const initialState = {
  greetings: [],
  isLoading: false,
  error: null,
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    const response = await fetch(base_url);
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.greetings = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default greetingSlice.reducer;