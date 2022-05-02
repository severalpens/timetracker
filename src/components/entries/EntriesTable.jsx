import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import EntryRow from './EntryRow';

export default function EntriesTable(props) {
  const {fetchData, entries, setEntries} = props;
  const [entry, setEntry] = useState('');
  const [entryName, setEntryName] = useState('');
  const [description, setDescription] = useState('');



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


  const deleteEntry = async (entry)  => {
    const  {id, _version} = entry;
    const input = {id, _version};
    await API.graphql({ query: mutations.deleteEntry, variables: { input } });
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
                Name
              </th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries ? entries.map((entry) => {
              return (
              <EntryRow key={entry.id} entry={entry} setEntry={setEntry} deleteEntry={deleteEntry}/>
            )}): null}
          </tbody>
        </table>
      </div>
    );
}