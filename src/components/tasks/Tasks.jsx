import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import TasksTable from './TasksTable';
import TaskForm from './TaskForm';

export default function Tasks(props) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listTasks });
    let ts = graphqlResult.data.listTasks.items.filter(x => !x._deleted);
    setTasks(ts);

  }


  const editTask = async (t) => {
    await API.graphql({ query: mutations.updateTask, variables: { input: t } });
    await fetchData();
  }


  const saveTask = (t) => {

  }

  const addNew = () => {

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name: taskName
    };

    await API.graphql({ query: mutations.createTask, variables: { input } });
    // navigate("/elements/accounts", { replace: true });
  }


  const cancelEdit = (t) => {

  }


  return (
    <div className="flex">
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Tasks</h2>
        <div className="flex">

        <TasksTable />
        <TaskForm/>
        </div>
        </div>
    </div>

  );
}