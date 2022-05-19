import React from 'react';
import '../styles/Column.css';
import Task from './Task';

function Column({ title, tasks, edit }) {

    return (
        <div className={"col"}>
            <p>{title}</p>
            <hr className={"solid"}></hr>
            {tasks.map((task, index) => {
                return <Task key={index} task={task} onEdit={edit} />
            })}

        </div>
    );
}

export default Column;