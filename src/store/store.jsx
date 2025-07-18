import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./counterSlice"
import { getTodolist } from "./todoBobojon"

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todolist: getTodolist.reducer
  }
})
