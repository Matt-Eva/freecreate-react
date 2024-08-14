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
  authenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialValue,
  },
  reducers: {
    unauthorizedUser(state) {
      state.value.authenticated = false;
      state.value.isFetched = true;
    },
    populateUser(state, action: PayloadAction<User>) {
      state.value.user = action.payload;
      state.value.isFetched = true;
      state.value.authenticated = true;
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

export const { populateUser, destroyUser, updateUser, unauthorizedUser } =
  userSlice.actions;

export default userSlice.reducer;
