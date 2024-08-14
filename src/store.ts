import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import SearchResultReducer from "./state/searchResultSlice";
import UserCreatorReducer from "./state/userCreatorSlice";
import UserReducer from "./state/userSlice";

const store = configureStore({
  reducer: {
    searchResults: SearchResultReducer,
    userCreators: UserCreatorReducer,
    user: UserReducer,
  },
});

export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export default store;
