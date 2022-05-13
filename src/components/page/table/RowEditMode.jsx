import React from 'react'
import InputText from './TextBox';
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';

import { useContext, useEffect, useState } from 'react';
const initialComponents = [
  {
    id:'',
name:'',
description:'',
startTime: '',
endTime: '',
parentId: '',
type:''
}
]

export default function RowEditMode(props) {
  const [components,setComponents] = useState([])
  const [component,setComponent] = useState({})

  useEffect(() => {
    setComponents(props.components)
    setComponent(components[0])
    return () => {
      
    }
  }, [])


  return (
            <tr key={component.id}>
                <td id="input1" className="px-6 py-4 whitespace-nowrap w-96">
                </td>
                <td id="input2" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                    }}>Save</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
