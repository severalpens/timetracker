import  { useState , useEffect} from 'react';
const initialComponent = 
  {
    id:'',
name:'',
description:'',
startTime: '',
endTime: '',
parentId: '',
type:''
}


export default function RowDisplayMode(props) {
  const [component,setComponent] = useState(initialComponent)

  useEffect(() => {
    setComponent(props.component)
    console.log(props.component)
    return () => {
      
    }
  }, [])


  return (
<tr><td>{props.component.name}</td></tr>
      // <tr key={component.id}>
      //           <td className="px-6 whitespace-nowrap w-82">
      //             <div className="text-sm text-gray-900">{component?? component.name}</div>
      //           </td>
      //             <td className="px-6 whitespace-nowrap text-sm text-gray-500">
      //             <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
      //               onClick={e => {
                     
      //               }}>Delete</button>
      //             <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
      //               onClick={e => {
                      
      //               }}>Edit</button>
      //           </td>
      //         </tr>
  )
}
