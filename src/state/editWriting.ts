import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { EditWriting } from "../types/editWriting";

const initialEditWriting: EditWriting = {
  Uid: "",
  Title: "",
  Description: "",
  Author: "",
  UniqueAuthorName: "",
  CreatorId: "",
  Font: "",
  Genres: [],
  Tags: [],
};

const initialValue = {
  isFetched: false,
  editWriting: initialEditWriting,
};

const slice = createSlice({
  name: "editWriting",
  initialState: { value: initialValue },
  reducers: {
    populateEditWriting(state, action: PayloadAction<EditWriting>) {
      state.value.isFetched = true;
      state.value.editWriting = action.payload;
    },
  },
});

export const { populateEditWriting } = slice.actions;

export default slice.reducer;
