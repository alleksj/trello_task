import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import CreateTask from './CreateTask';
import Tasks from './Tasks';

function App() {
    // States
    const [tasks, setTasks] = useState([]);
    const [isCreateVisible, setIsCreateVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // Functions

    // Displays the create/edit window
    function handleToggleAddTask() {
        setIsCreateVisible(!isCreateVisible);
        if (selectedTask) {
            setSelectedTask(null);
        }
    }

    // Function for the small plus button - Either adds a new task to the list or if we click on it updates the existing task
    function addTask(task) {
        setTasks(prevTasks => {
            return [...prevTasks, task];
        });
        if (selectedTask) {
            setSelectedTask(null);
        }
    }

    // When we click on an existing task, it opens its data in the create window so it can be edited
    function onEditTask(id) {
        setSelectedTask(tasks.find(task => task.idNum === id));
        setIsCreateVisible(true);
    }

    // Checks if we edited some info on a task and if it needs to change task's data and position
    function onUpdate(task) {
        setTasks(prevTasks => {
            const newTasks = [];

            prevTasks.forEach(t => {
                if (t.idNum === task.idNum) {
                    newTasks.push({ ...task })
                } else {
                    newTasks.push({ ...t });
                }
            })
            return newTasks;
        });

        if (selectedTask) {
            setSelectedTask(null);
        }
    }


    return (
        <div>
            <Header />
            <div className="columns">
                <Tasks tasks={tasks} editTask={onEditTask} />
            </div>
            <CreateTask tasks={tasks} onAdd={addTask} onUpdate={onUpdate} selectedTask={selectedTask} showDialog={isCreateVisible} handleToggleAddTask={handleToggleAddTask} />
        </div>
    );
}

export default App;

