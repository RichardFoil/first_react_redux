import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setTodo, clearTodo } from "./features/todoSlice";

function Todo() {
  
    const dispatch = useDispatch()
    const items = useSelector((state) => state.todo.items)
    const [input, setInput] = useState('')

    const renderItems = items.map((item, index) => <li key={index}>{item}</li>)

    const submitForm = (e) => {
        e.preventDefault()
        dispatch(setTodo(input))
    }

  return (
    <div>
        <form onSubmit={(e)=> submitForm(e)}>
            <input type="text" onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {renderItems}
        </ul>
        <button onClick={()=> dispatch(clearTodo())}></button>
        </div>
  )
}

export default Todo