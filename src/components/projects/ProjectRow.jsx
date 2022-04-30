import React, { useState } from 'react';
import ProjectRowDisplayMode from './ProjectRowDisplayMode';
import ProjectRowEditMode from './ProjectRowEditMode';

export default function ProjectRow(props) {
    const {project, setProject, deleteProject} = props;
    const [inEditMode, setInEditMode] = useState(false)
    if (inEditMode) {
        return (
            <ProjectRowEditMode project={project} setInEditMode={setInEditMode}  setProject={setProject}  />
        )
    }
    return (
        <ProjectRowDisplayMode  project={project} setInEditMode={setInEditMode}  setProject={setProject} deleteProject={deleteProject}/>
    )
}
