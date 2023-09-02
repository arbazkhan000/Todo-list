import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <EditIcon  onClick={() => editTodo(task.id)} />
                <DeleteIcon  onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo;
