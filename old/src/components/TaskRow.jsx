import React, { useState } from 'react';
import TaskRowDisplayMode from './TaskRowDisplayMode';
import TaskRowEditMode from './TaskRowEditMode';

export default function TaskRow(props) {
    const {task, tasks, setCategory, setDescription, category, description} = props;
    const [inEditMode, setInEditMode] = useState(false)
    if (inEditMode) {
        return (
            <TaskRowEditMode task={task} setInEditMode={setInEditMode}  tasks={tasks} setCategory={setCategory} setDescription={setDescription} category={category} description={description}/>
        )
    }
    return (
        <TaskRowDisplayMode task={task} setInEditMode={setInEditMode}  tasks={tasks} />
    )
}
