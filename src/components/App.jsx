import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import CreateTask from './CreateTask';
import Tasks from './Tasks';

function App() {
    const [tasks, setTasks] = useState([]);
    const [isCreateVisible, setIsCreateVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    // Functions

    function handleToggleAddTask() {
        setIsCreateVisible(!isCreateVisible);
    }

    function addTask(task) {
        setTasks(prevTasks => {
            return [...prevTasks, task];
        });
        if (selectedTask) {
            setSelectedTask(null);
        }
    }

    // I clicked on edit task and I want to open a dialog with these values
    function onEditTask(id) {
        setSelectedTask(tasks.find(task => task.id === id));
        setIsCreateVisible(true);
    }

    function onUpdate(task) {
        setTasks(prevTasks => {
            return [...prevTasks.map(t => t.id !== task.id ? t : task)];
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
            <CreateTask onAdd={addTask} onUpdate={onUpdate} selectedTask={selectedTask} showDialog={isCreateVisible} handleToggleAddTask={handleToggleAddTask} />
        </div>
    );
}

export default App;

