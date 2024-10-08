import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";

import SearchResultReducer from "./state/searchResultSlice";
import UserCreatorReducer from "./state/userCreatorSlice";
import UserReducer from "./state/userSlice";
import EditWritingReducer from "./state/editWriting";
import UserWritingDraftReducer from "./state/userWritingDrafts.ts";
import UserWritingPublisheReducer from "./state/userWritingPublished.ts";

const store = configureStore({
  reducer: {
    searchResults: SearchResultReducer,
    userCreators: UserCreatorReducer,
    user: UserReducer,
    editWriting: EditWritingReducer,
    userDrafts: UserWritingDraftReducer,
    userPublished: UserWritingPublisheReducer,
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
