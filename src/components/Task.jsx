import React from 'react';
import '../styles/Task.css';

function Task({ task, onEdit }) {
    return (
        <div onClick={() => onEdit(task.idNum)}>
            <div className="task" draggable>
                <h1>Task {task.idNum}:</h1>
                <p>{task.title}</p>
            </div>
        </div>
    )
}

export default Task;