import React from 'react';
import Column from './Column';

function Tasks({ tasks, editTask }) {

    // Sorts the list of tasks according to their status into corresponding columns
    const done = tasks.filter(task => task.status === 'Done');
    const toDo = tasks.filter(task => task.status === 'To Do');
    const inProgress = tasks.filter(task => task.status === 'In progress');

    return (
        <React.Fragment>
            <Column title="To Do" tasks={toDo} edit={editTask} />
            <Column title="In Progress" tasks={inProgress} edit={editTask} />
            <Column title="Done" tasks={done} edit={editTask} />
        </React.Fragment>
    );
}

export default Tasks;