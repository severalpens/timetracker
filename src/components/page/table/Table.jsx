import { useEffect, useState } from 'react';
import Row from './Row'

const initialComponent = {
  id:'',
name:'',
description:'',
startTime: '',
endTime: '',
parentId: '',
type:''
}

const initialComponents = [initialComponent]


export default function Table(props) {
  const [components,setComponents] = useState(initialComponents)
  const [component,setComponent] = useState(initialComponent)

  useEffect( () => {
   fetchData();
  }, [component])

  const fetchData = async () => {

    setComponents(props.components)
    setComponent(props.components[0])
    
  }

  console.log('table component')
  console.log(component)
  

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
            <Row component={component}></Row>
          </tbody>
        </table>
      </div>
    );
}