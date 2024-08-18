import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Writing from "../types/writing";

const initialWritingPublished: Writing[] = [];

const initialValue = {
  published: initialWritingPublished,
  isFetched: false,
};

const slice = createSlice({
  name: "published",
  initialState: {
    value: initialValue,
  },
  reducers: {
    populatePublished(state, action: PayloadAction<Writing[]>) {
      state.value.isFetched = true;
      state.value.published = action.payload;
    },
  },
});

export const { populatePublished } = slice.actions;

export default slice.reducer;
