import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { SearchResults } from "../types/searchResult";

const initialValue: SearchResults = [];

const slice = createSlice({
  name: "searchResults",
  initialState: {
    value: initialValue,
  },
  reducers: {
    updateSearchResults(state, action: PayloadAction<SearchResults>) {
      state.value = action.payload;
    },
  },
});
