import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import TaskRow from './TaskRow';

export default function TasksTable(props) {
  const {fetchData, tasks, setTasks} = props;
  const [task, setTask] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');



  const editTask = async (t)  => {
    await API.graphql({ query: mutations.updateTask, variables: {input:t}});
    await fetchData();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name:taskName
    };

    await API.graphql({ query: mutations.createTask, variables: { input } });
   // navigate("/elements/accounts", { replace: true });
  }


  const deleteTask = async (task)  => {
    const  {id, _version} = task;
    const input = {id, _version};
    await API.graphql({ query: mutations.deleteTask, variables: { input } });
    await fetchData();
  }


  return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-1/2 min-w-min">
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Project
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Task
              </th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks ? tasks.map((task) => {
              return (
              <TaskRow key={task.id} task={task} setTask={setTask} deleteTask={deleteTask}/>
            )}): null}
          </tbody>
        </table>
      </div>
    );
}