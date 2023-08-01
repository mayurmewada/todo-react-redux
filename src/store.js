import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./redux/todoSlice";

export default configureStore({
  reducer : {
    todo : todoSlice,
  }
})