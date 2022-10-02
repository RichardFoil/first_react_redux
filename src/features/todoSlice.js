import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            return{ items :[...state.items, action.payload]}
        },
        clearTodo: () => {
            return initialState
        },
      
    }
})

export const {setTodo, clearTodo, } = todoSlice.actions

export default todoSlice.reducer