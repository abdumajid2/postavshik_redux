import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./counterSlice"
import { createSlice } from "./todoBobojon"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todolist: createSlice.reducer
  }
})
