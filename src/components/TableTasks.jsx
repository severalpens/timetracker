import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import TaskRow from './TaskRow';




export default function TableTasks(props) {
  const [tasks, setTasks] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])
  
  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listTasks });
    let ts = graphqlResult.data.listTasks.items.filter(x => !x._deleted);
    setTasks(ts);

  }

  const addNew = () => {

  }

  const editTask = async (t)  => {
    await API.graphql({ query: mutations.updateTasks, variables: {input:t}});
    await fetchData();
  }


  const saveTask = (t)  => {
    let tmp = tasks.find(x => x.id === t.id);
    
  }


  const cancelEdit = (t)  => {
    let tmp = tasks.find(x => x.id === t.id);
    
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
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only"></span></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tasks.map((task) => {
              return (
              <TaskRow key={task.id} task={task} tasks={tasks} setCategory={setCategory} setDescription={setDescription} category={category} description={description}/>
            )})}
          </tbody>
        </table>
      </div>
      <button type="button" className="border m-4  px-6 py-2.5 border-black rounded-md"
        onClick={e => {
          addNew();
        }}>Add New</button>
    </div>
  );
}