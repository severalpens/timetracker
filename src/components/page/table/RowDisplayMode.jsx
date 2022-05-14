import  { useState , useEffect} from 'react';
import { Link } from "react-router-dom";

export default function RowDisplayMode({component}) {

  return (
      <tr key={component.id}>
                <td className="px-6 whitespace-nowrap w-82">
                  <div className="text-sm text-gray-900">{component.name}</div>
                </td>
                  <td className="px-6 whitespace-nowrap text-sm text-gray-500">
                  <Link  className="border m-4  px-6 py-2.5 border-black rounded-md" to="/">Edit</Link>
                </td>
              </tr>
  )
}
