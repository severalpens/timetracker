import React from 'react'

export default function TaskRowDisplayMode(props) {
  const {task,setInEditMode, deleteTask} = props;
  return (
     
      <tr key={task.id}>
                <td className="px-6 whitespace-nowrap w-82">
                  <div className="text-sm text-gray-900">{task.name}</div>
                </td>
                  <td className="px-6 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      deleteTask(task)
                    }}>Delete</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      setInEditMode(true)
                    }}>Edit</button>
                </td>
              </tr>
  )
}
