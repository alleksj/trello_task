import React, { useState } from "react";
import '../styles/CreateTask.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Form from './Form';


function CreateTask(props) {

    return (
        <div>
            {props.showDialog ? <div>
                <div>
                    <Fab onClick={props.handleToggleAddTask} style={{
                        margin: "0px",
                        top: "auto",
                        right: "30px",
                        bottom: "30px",
                        left: "auto",
                        position: "fixed",
                        width: "80px",
                        height: "80px"
                    }}>
                        <CloseIcon style={{
                            fontSize: 95, color: "#D76F62"
                        }} />
                    </Fab>
                </div>
                <Form onAdd={props.onAdd} selectedTask={props.selectedTask} onUpdate={props.onUpdate} style={{ zIndex: 1 }} />
            </div> : <div>
                <Fab onClick={props.handleToggleAddTask} style={{
                    margin: "0px",
                    top: "auto",
                    right: "30px",
                    bottom: "30px",
                    left: "auto",
                    position: "fixed",
                    width: "80px",
                    height: "80px"
                }}>
                    <AddCircleIcon style={{
                        fontSize: 95, color: "#D76F62"
                    }} />
                </Fab>
            </div>}
        </div>

    );
}

export default CreateTask;