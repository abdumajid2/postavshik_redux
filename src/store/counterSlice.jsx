

import { createSlice } from "@reduxjs/toolkit";




export let counterSlice = createSlice({
    name: "couter",
    initialState: {
        count: 0,
        data: [
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "1", img: './AzamImg1.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "2", img: './AzamImg2.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "3", img: './AzamImg3.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "4", img: './AzamImg4.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "5", img: './AzamImg5.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "6", img: './AzamImg6.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "7", img: './AzamImg7.png' },
      { name: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3", price: "2 491", id: "8", img: './AzamImg8.png' }
   
    ]
    },
    reducers: {
        increament: (state) => {
            state.count += 1
        },
        decreament: (state) => {
            state.count -= 1
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter((e) => e.id != action.payload)
        },
        addNewUser: (state, action) => {
            state.data = [...state.data, action.payload]
        },
        editUser: (state, action) => {
            state.data = state.data.map((e) => {
                if (e.id == action.payload.id) {
                    return {
                        ...e,
                        name: action.payload.name,
                        age: action.payload.age
                    }
                }
                return e
            })
        }
    }
})



export let { increament, decreament, deleteUser, addNewUser, editUser } = counterSlice.actions