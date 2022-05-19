import React from 'react';
import '../styles/Task.css';

function Task({ task, onEdit }) {
    return (
        <div onClick={() => onEdit(task.id)}>
            <div className="task">
                <h1>Task {task.idNum}:</h1>
                <p>{task.title}</p>
            </div>
        </div>
    )
}

export default Task;