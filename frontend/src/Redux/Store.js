import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Reducers/Reducer1";
import RegisterSlice from "./Reducers/RegisterSlice";
import LoginSlice from "./Reducers/LoginSlice";
import PostSlice from "./Reducers/PostSlice";
import AdoptionSlice from "./Reducers/AdoptionSlice";


export default configureStore({
  reducer: {
   counter : counterSlice,
   register: RegisterSlice,
   login: LoginSlice,
   post: PostSlice,
   adoption: AdoptionSlice
  },
});
