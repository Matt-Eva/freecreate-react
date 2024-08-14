import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/user";

const initialUser: User = {
  uid: "",
  username: "",
  email: "",
  userId: "",
  birthDay: 0,
  birthMonth: 0,
  birthYear: 0,
};

const initialValue = {
  user: initialUser,
  isFetched: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    populateUser(state, action: PayloadAction<User>) {
      state.value.user = action.payload;
      state.value.isFetched = true;
    },
    updateUser(state, action: PayloadAction<User>) {
      state.value.user = action.payload;
    },
    destroyUser(state) {
      state.value.user = initialUser;
      state.value.isFetched = false;
    },
  },
});

export const { populateUser, destroyUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
