import  { useState , useEffect} from 'react';
import { Link } from "react-router-dom";

export default function RowDisplayMode({component, setInEditMode,  mutationRequest}) {

  const deleteBtnClickHandler = (e) => {
    mutationRequest(component,"delete")
  }

  return (
      <tr key={component.id}>
                <td className="flex justify-between px-6 whitespace-nowrap w-82">
                  <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.name}</div>
                  <div className="flex">
                    <button onClick={setInEditMode} className="border m-4  px-6 py-2.5 border-black rounded-md">Edit</button>
                    <button onClick={deleteBtnClickHandler} className="border m-4  px-6 py-2.5 border-black rounded-md">Delete</button>
                  </div>
                  
                </td>
              </tr>
  )
}
