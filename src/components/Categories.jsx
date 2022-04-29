import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import TaskRow from './TaskRow';
import CategoryRow from './CategoryRow';
import TableCategories from './TableCategories';
import FormCategory from './FormCategory';

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listCategories });
    let ts = graphqlResult.data.listCategories.items.filter(x => !x._deleted);
    setCategories(ts);

  }


  const editTask = async (t) => {
    await API.graphql({ query: mutations.updateCategories, variables: { input: t } });
    await fetchData();
  }


  const saveCategory = (t) => {

  }

  const addNew = () => {

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name: categoryName
    };

    await API.graphql({ query: mutations.createCategories, variables: { input } });
    // navigate("/elements/accounts", { replace: true });
  }


  const cancelEdit = (t) => {

  }


  return (
    <div className="flex">
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600">Categories</h2>
        <div className="flex">

        <TableCategories />
        <FormCategory />
        </div>
        </div>
    </div>

  );
}