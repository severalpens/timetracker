import React from 'react'
import InputEntry from './EntryInput';
import InputText from './InputText';

export default function EntryRowEditMode(props) {
const {entry, setInEditMode,setEntry} = props;

const saveTask = (t) => {
  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={entry.id}>
                <td  className="px-6 py-4 whitespace-nowrap">
                  <InputText entry={entry} setEntry={setEntry}/>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask(entry);
                    }}>Save</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(entry);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
