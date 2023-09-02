import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
uuidv4();



const Todo = ({ addTodo }) => {

    const [value, setValue] = useState('');


    const submitForm = (e) => {
        e.preventDefault();

        addTodo(value);
        setValue('');
    }


    return (

        <form onSubmit={submitForm} className="TodoForm">
            <input value={value} onChange={e => setValue(e.target.value)} type="text" className="todo-input" placeholder='What is the task today?' />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>

    )
}


export default Todo;



// How to make create Todolist With React.js ?