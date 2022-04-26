import React from 'react'
import InputCategory from './InputCategory';
import InputDescription from './InputDescription';

export default function TaskRowEditMode(props) {
const {task, setInEditMode,setCategory, setDescription,tasks, category, description} = props;

const saveTask = (t) => {
  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={task.id}>
                <td  className="px-6 py-4 whitespace-nowrap">
                <InputCategory task={task} tasks={tasks} setCategory={setCategory} category={category}/>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap">
                  <InputDescription task={task}  tasks={tasks}  setDescription={setDescription} description={description}/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {task.total}
                  </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(task);
                    }}>Cancel</button>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask(task);
                    }}>Save</button>
                </td>
              </tr>
  )
}
