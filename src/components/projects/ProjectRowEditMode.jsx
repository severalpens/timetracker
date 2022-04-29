import React from 'react'
import InputProject from './ProjectInput';
import InputText from './InputText';

export default function ProjectRowEditMode(props) {
const {project, setInEditMode,setProject} = props;

const saveTask = (t) => {
  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={project.id}>
                <td  className="px-6 py-4 whitespace-nowrap">
                  <InputText project={project} setProject={setProject}/>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask(project);
                    }}>Save</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(project);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
