import React, { useState } from 'react';
import '../styles/Form.css';
import Zoom from '@mui/material/Zoom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import { getTask } from "../utils/task-factory";

function Form({ onAdd, onUpdate, selectedTask, tasks, closeWindow }) {
    // States
    const [task, setTask] = useState(getMyTask(selectedTask));

    // Functions

    // Updates what is stored as task's data while the user is typing
    function handleChange(event) {
        const { name, value } = event.target;

        setTask((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    // When opening the create window, either populate the create form with existing task's data or create a 
    // new one (set new id and clear the rest of the form)
    function getMyTask(selectedTask) {
        console.log(selectedTask)
        if (selectedTask) {
            return Object.assign(getTask(), selectedTask)
        }
        const newTask = getTask();
        newTask.idNum = tasks.length + 1;
        return newTask;
    };

    // Resets state, so that when we submit a new form, and click on plus to open the form again, the values are cleared
    function resetState() {
        setTask(getTask());
    }

    // Submits new task or updates and resets state
    function submitTask(event) {
        event.preventDefault();
        if (selectedTask) {
            onUpdate(task)
        } else {
            onAdd(task);
        }
        closeWindow();
        resetState();
    }

    return (
        <div className='container'>
            <form className="create-task" >
                <h2>Task {task.idNum}</h2>
                <input name="title" onChange={handleChange} placeholder="Title" value={task.title} />
                <textarea
                    name="description"
                    onChange={handleChange}
                    placeholder="Task description..."
                    rows="3"
                    value={task.description} />

                <label>Status: </label>
                <select id="status" name="status" onChange={handleChange} value={task.status}>
                    <option value="To Do">To Do</option>
                    <option value="In progress">In progress</option>
                    <option value="Done">Done</option>
                </select>
                <label>User: </label>
                <select id="user" name="user" onChange={handleChange} value={task.user}>
                    <option value="Unassigned">Unassigned</option>
                    <option value="AB">AB</option>
                    <option value="CD">CD</option>
                    <option value="EF">EF</option>
                </select>

                <Zoom in={true}>
                    <Fab onClick={submitTask} style={{
                        position: "absolute",
                        right: "18px",
                        bottom: "-18px",
                        background: "#f9f8f7",
                        color: "#D76F62",
                        border: "none",
                        width: "36px",
                        height: "36px",
                        cursor: "pointer",
                        outline: "none"
                    }}>
                        <AddCircleIcon style={{
                            fontSize: 35
                        }} />
                    </Fab>
                </Zoom>
            </form>
        </div >
    )
}

export default Form;