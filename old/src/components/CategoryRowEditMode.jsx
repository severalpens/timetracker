import React from 'react'
import InputCategory from './InputCategory';
import InputDescription from './InputDescription';
import InputText from './InputText';

export default function CategoryRowEditMode(props) {
const {name, setInEditMode,setName,  category} = props;

const saveTask = (t) => {
  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={category.id}>
                <td  className="px-6 py-4 whitespace-nowrap">
                <InputText item={category.name} setItem={setName}/>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(category);
                    }}>Cancel</button>
                </td>
                <td  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask(category);
                    }}>Save</button>
                </td>
              </tr>
  )
}
