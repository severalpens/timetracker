import React from 'react'
import Page from './page/Page.jsx';
import getComponents from '../db/getComponents.tsx';
import { useContext, useEffect, useState } from 'react';
import deleteComponent from '../db/deleteComponent.tsx';

export default function Projects() {

  const [components, setComponents] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let c = await getComponents();
    let cc = c.filter(x => x.type === "task")
    console.log(cc)
    setComponents(cc);
    setRender(true);
  }

  const rm = async () => {
    await deleteComponent(components[0])
  }

  if (render) {
    console.log('render', render)
    console.log('projects', components)
    return (

      <div>
        <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
          onClick={e => {
            rm()
          }}>Delete</button>

        <Page components={components} name="Tasks" />
      </div>
    )
  }
  else {
    console.log('render', render)

    return (
      <div></div>
    )
  }

}
