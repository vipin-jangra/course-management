import { configureStore } from "@reduxjs/toolkit";
import {userSlice,courseSlice} from "./AppSlice";


export default configureStore({
    reducer: {
    users:userSlice.reducer,
    courses:courseSlice.reducer,
  },
  });