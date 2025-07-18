import { createSlice } from "@reduxjs/toolkit"

export let getTodolist = createSlice({
  name: "todolist",
  initialState: {
    users: [
      {
        image: "imgGets.png",
        name: "Yoqub",
        price: 23,
        id: 1
      },
      {
        image: "imgGets.png",
        name: "Ali",
        price: 43,
        id: 2
      },
      {
        image: "imgGets.png",
        name: "Anush",
        price: 3,
        id: 3
      }
    ]
  },

  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter(e => e.id != action.payload)
    },
    addNewUser: (state, action) => {
      state.users = [...state.users, action.payload]
    },
    editUser: (state, action) => {
      state.users = state.users.map(e => {
        if (e.id == action.payload.id) {
          return action.payload
        }
        return e
      })
    }
  }
})

export let { deleteUser, addNewUser, editUser } = getTodolist.actions
