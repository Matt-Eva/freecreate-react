import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { UserCreator } from "../types/userCreator";

const initialValue: UserCreator[] = [];

const slice = createSlice({
  name: "userCreators",
  initialState: {
    value: initialValue,
  },
  reducers: {
    populateUserCreators(state, action: PayloadAction<UserCreator[]>) {
      state.value = action.payload;
    },
    addUserCreator(state, action: PayloadAction<UserCreator>) {
      state.value = [...state.value, action.payload];
    },
    removeUserCreator(state, action: PayloadAction<string>) {
      const uid = action.payload;
      const oneLess = state.value.filter((creator) => creator.uid !== uid);
      state.value = oneLess;
    },
  },
});

export const { populateUserCreators, addUserCreator, removeUserCreator } =
  slice.actions;

export default slice.reducer;
