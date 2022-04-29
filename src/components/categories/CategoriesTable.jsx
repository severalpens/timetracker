import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import CategoryRow from './CategoryRow';

export default function CategoriesTable(props) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])
  
  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listCategories });
    let ts = graphqlResult.data.listCategories.items.filter(x => !x._deleted);
    setCategories(ts);
  }


  const editTask = async (t)  => {
    await API.graphql({ query: mutations.updateCategory, variables: {input:t}});
    await fetchData();
  }


  const saveCategory = (t)  => {
    
  }

  const addNew = ()  => {
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name:categoryName
    };

    await API.graphql({ query: mutations.createCategory, variables: { input } });
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
            {categories.map((task) => {
              return (
              <CategoryRow key={task.id} categoryName={categoryName} setCategoryName={setCategoryName} setCategory={setCategory} setDescription={setDescription} category={category} description={description}/>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}