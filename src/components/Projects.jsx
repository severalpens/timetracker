import React from 'react'
import Page from './page/Page.jsx';
import getComponents from '../db/getComponents.tsx';
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

export default function Projects() {
  const [components,setComponents] = useState(initialComponents)
  useEffect( () => {
   fetchData();
  }, [])

  const fetchData = async () => {
    let c = await getComponents();
    setComponents(c);
    console.log('Projects components')
    
    console.log(c)
    
  }
  
  return (
    <Page components={components} name="Projects"/>
    )
}
