import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Writing from "../types/writing";

const initialWritingDrafts: Writing[] = [];

const initialValue = {
  drafts: initialWritingDrafts,
  isFetched: false,
};

const slice = createSlice({
  name: "drafts",
  initialState: {
    value: initialValue,
  },
  reducers: {
    populateDrafts(state, action: PayloadAction<Writing[]>) {
      state.value.isFetched = true;
      state.value.drafts = action.payload;
    },
  },
});

export const { populateDrafts } = slice.actions;

export default slice.reducer;
