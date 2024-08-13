import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { UserCreator } from "../types/userCreator";

const initialCreators: UserCreator[] = [];

const initialValue = {
  isFetched: false,
  creators: initialCreators,
};

const slice = createSlice({
  name: "userCreators",
  initialState: {
    value: initialValue,
  },
  reducers: {
    populateUserCreators(state, action: PayloadAction<UserCreator[]>) {
      state.value.creators = action.payload;
      state.value.isFetched = true;
    },
    addUserCreator(state, action: PayloadAction<UserCreator>) {
      state.value.creators = [...state.value.creators, action.payload];
    },
    removeUserCreator(state, action: PayloadAction<string>) {
      const uid = action.payload;
      const oneLess = state.value.creators.filter(
        (creator) => creator.uid !== uid
      );
      state.value.creators = oneLess;
    },
  },
});

export const { populateUserCreators, addUserCreator, removeUserCreator } =
  slice.actions;

export default slice.reducer;
