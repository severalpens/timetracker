import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Table from './table/Table';

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
export default function Page(props) {
  const [components,setComponents] = useState(initialComponents)

  useEffect(() => {
    setComponents(props.components)
    return () => {
      
    }
  }, [])
  
  console.log('page components')
  console.log(props.components)

  return (
  <div className="ml-16 my-16 ">
  <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">{props.name}</h2>
  <div className="flex flex-wrap-reverse">
  <Table components={props.components}></Table>
  </div>
</div>
)
}
