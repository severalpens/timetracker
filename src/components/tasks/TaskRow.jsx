import React, { useState } from 'react';
import TaskRowDisplayMode from './TaskRowDisplayMode';
import TaskRowEditMode from './TaskRowEditMode';

export default function TaskRow(props) {
    const {task, setTask, deleteTask} = props;
    const [inEditMode, setInEditMode] = useState(false)
    if (inEditMode) {
        return (
            <TaskRowEditMode task={task} setInEditMode={setInEditMode}  setTask={setTask}  />
        )
    }
    return (
        <TaskRowDisplayMode  task={task} setInEditMode={setInEditMode}  setTask={setTask} deleteTask={deleteTask}/>
    )
}
