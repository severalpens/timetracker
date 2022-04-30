import React from 'react'
import InputEntry from './EntryInput';
import InputText from './InputText';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';


export default function EntryRowEditMode(props) {
const {entry, setInEditMode,setEntry} = props;

const saveTask = async () => {
  let {id, name, _version}= entry;
  let p = {id, name, _version};
  await API.graphql({ query: mutations.updateEntry, variables: { input: p } });

  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={entry.id}>
                <td id="input1" className="px-6 py-4 whitespace-nowrap w-96">
                  <InputText entry={entry} setEntry={setEntry}/>
                </td>
                <td id="input2" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask();
                    }}>Save</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(entry);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
