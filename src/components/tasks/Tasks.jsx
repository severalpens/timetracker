import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import TasksTable from './TasksTable';
import TaskForm from './TaskForm';

export default function Tasks(props) {
  const [projects, setProjects] = useState([]);
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

     graphqlResult = await API.graphql({ query: queries.listProjects });
     let ps = graphqlResult.data.listProjects.items.filter(x => !x._deleted);
    setProjects(ps);
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
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Tasks</h2>
        <div className="flex flex-wrap-reverse">
        <TasksTable fetchData={fetchData} tasks={tasks} setTasks={setTasks} />
        <TaskForm projects={projects} fetchData={fetchData}  tasks={tasks} setTasks={setTasks}/>
        </div>
    </div>

  );
}