import React, { useState } from 'react';
import '../styles/Form.css';
import Zoom from '@mui/material/Zoom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';

function Form({ onAdd, onUpdate, selectedTask }) {
    console.log(selectedTask)
    const [task, setTask] = useState({
        idNum: selectedTask ? selectedTask.idNum : "1",
        title: selectedTask ? selectedTask.title : "",
        description: selectedTask ? selectedTask.description : "",
        status: selectedTask ? selectedTask.status : "To Do",
        user: selectedTask ? selectedTask.user : "Unassigned"
    });

    function handleChange(event) {
        console.log(event)
        const { name, value } = event.target;

        setTask((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function resetState() {
        setTask({
            title: "",
            description: "",
            status: "To Do",
            user: "Unassigned"
        })
    }

    function submitTask(event) {
        event.preventDefault();
        if (selectedTask) {
            onUpdate(task)
        } else {
            onAdd(task);
        }
        resetState();
    }

    return (
        <div className='container'>
            <form className="create-task" >
                <h2>Task {task.idNum}</h2>
                <input name="title" onChange={handleChange} placeholder="Title" value={task.title} />
                <textarea name="description" onChange={handleChange} placeholder="Task description..." rows="3" value={task.description} />

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