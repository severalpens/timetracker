import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import EntriesTable from './EntriesTable';
import EntryForm from './EntryForm';

export default function Entries(props) {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  const [entryName, setEntryName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listEntries });
    let ps = graphqlResult.data.listEntries.items.filter(x => !x._deleted);
    setEntries(ps);

  }


  const editTask = async (t) => {
    await API.graphql({ query: mutations.updateEntry, variables: { input: t } });
    await fetchData();
  }


  const saveEntry = (t) => {

  }

  const addNew = () => {

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name: entryName
    };

    await API.graphql({ query: mutations.createEntry, variables: { input } });
    // navigate("/elements/accounts", { replace: true });
  }


  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listEntries });
    let ts = graphqlResult.data.listEntries.items.filter(x => !x._deleted);
    setEntries(ts);
  }

  const cancelEdit = (t) => {

  }


  return (
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Entries</h2>
        <div className="flex flex-wrap-reverse">
        <EntriesTable fetchData={fetchData} entries={entries} setEntries={setEntries} />
        <EntryForm  fetchData={fetchData}  entries={entries} setEntries={setEntries}/>
        </div>
    </div>

  );
}