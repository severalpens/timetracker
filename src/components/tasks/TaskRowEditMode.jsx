import React from 'react'
import InputTask from './TaskInput';
import InputText from './InputText';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';


export default function TaskRowEditMode(props) {
const {task, setInEditMode,setTask} = props;

const saveTask = async () => {
  let {id, name, _version}= task;
  let p = {id, name, _version};
  await API.graphql({ query: mutations.updateTask, variables: { input: p } });

  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={task.id}>
                              <td className="px-6 whitespace-nowrap w-82">
                  <div className="text-sm text-gray-900">{task.name}</div>
                </td>

                <td id="input1" className="px-6 py-4 whitespace-nowrap w-96">
                  <InputText task={task} setTask={setTask}/>
                </td>
                <td id="input2" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask();
                    }}>Save</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(task);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
