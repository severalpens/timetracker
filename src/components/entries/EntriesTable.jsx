import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import EntryRow from './EntryRow';

export default function EntriesTable(props) {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  const [entryName, setEntryName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])
  
  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listEntries });
    let ts = graphqlResult.data.listEntries.items.filter(x => !x._deleted);
    setEntries(ts);
  }


  const editTask = async (t)  => {
    await API.graphql({ query: mutations.updateEntry, variables: {input:t}});
    await fetchData();
  }


  const saveEntry = (t)  => {
    
  }

  const addNew = ()  => {
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name:entryName
    };

    await API.graphql({ query: mutations.createEntry, variables: { input } });
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
            {entries.map((entry) => {
              return (
              <EntryRow key={entry.id} entry={entry} setEntry={setEntry}/>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}