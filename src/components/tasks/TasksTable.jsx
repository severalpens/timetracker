import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import TaskRow from './TaskRow';

export default function TasksTable(props) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])
  
  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listTasks });
    let ts = graphqlResult.data.listTasks.items.filter(x => !x._deleted);
    setTasks(ts);
  }


  const editTask = async (t)  => {
    await API.graphql({ query: mutations.updateTask, variables: {input:t}});
    await fetchData();
  }


  const saveTask = (t)  => {
    
  }

  const addNew = ()  => {
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name:taskName
    };

    await API.graphql({ query: mutations.createTask, variables: { input } });
   // navigate("/elements/accounts", { replace: true });
  }


  const cancelEdit = (t)  => {
    
  }


  return (
    <div>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only"></span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => {
              return (
              <TaskRow key={task.id} task={task} setTask={setTask}/>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}