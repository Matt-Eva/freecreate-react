import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import Writing from "../types/Writing";

const initialEditWriting: Writing = {
  uid: "",
  title: "",
  description: "",
  author: "",
  uniqueAuthorName: "",
  writingType: "",
  creatorId: "",
  font: "",
  genres: [],
  tags: [],
};

const initialValue = {
  isFetched: false,
  editWriting: initialEditWriting,
};

const slice = createSlice({
  name: "editWriting",
  initialState: { value: initialValue },
  reducers: {
    populateEditWriting(state, action: PayloadAction<Writing>) {
      state.value.isFetched = true;
      state.value.editWriting = action.payload;
    },
  },
});

export const { populateEditWriting } = slice.actions;

export default slice.reducer;
