import React from 'react'
import InputText from './InputText';

export default function TaskRowEditMode(props) {
const {task, setInEditMode,setTask} = props;

const saveTask = (t) => {
  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={task.id}>
                <td  className="px-6 py-4 whitespace-nowrap">
                  <InputText task={task} setTask={setTask}/>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask(task);
                    }}>Save</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(task);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
