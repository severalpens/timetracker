import  { useState , useEffect} from 'react';
import { Link } from "react-router-dom";

export default function RowDisplayMode({component, setInEditMode,  mutationRequest}) {

  const deleteBtnClickHandler = (e) => {
    mutationRequest(component,"delete")
  }

  return (
               <tr key={component.id}>
                  <td className="flex justify-between px-6 whitespace-nowrap w-82">
                  <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.parentId}</div>
                  <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.name}</div>
                  <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.startTime}</div>
                  <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{component.endTime}</div>
                  </td>
                </tr>
  )
}
