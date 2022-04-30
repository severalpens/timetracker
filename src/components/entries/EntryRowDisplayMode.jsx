import React from 'react'

export default function EntryRowDisplayMode(props) {
  const {entry,setInEditMode} = props;
  return (
     
      <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{entry.name}</div>
                </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      setInEditMode(true)
                    }}>Edit</button>
                </td>
              </tr>
  )
}
