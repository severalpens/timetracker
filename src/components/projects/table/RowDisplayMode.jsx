import React from 'react'

export default function RowDisplayMode(props) {
  const {project,setInEditMode, deleteProject} = props;
  return (
     
      <tr key={project.id}>
                <td className="px-6 whitespace-nowrap w-82">
                  <div className="text-sm text-gray-900">{project.name}</div>
                </td>
                  <td className="px-6 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      deleteProject(project)
                    }}>Delete</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      setInEditMode(true)
                    }}>Edit</button>
                </td>
              </tr>
  )
}
