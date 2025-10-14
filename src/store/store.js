// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Dummy slice so Redux always has at least one reducer
const dummySlice = createSlice({
  name: 'dummy',
  initialState: { value: null },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = dummySlice.actions;

export const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer, // at least one reducer
  },
});

