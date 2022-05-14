import React from 'react'
import Page from './page/Page.jsx';
import getComponents from '../db/getComponents.tsx';
import { useContext, useEffect, useState } from 'react';


export default function Projects() {

  const [components, setComponents] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let c = await getComponents();
    let cc = c.filter(x => x.type === "record")
    setComponents(cc);
    setRender(true);
  }

  if (render) {
    return (
      <Page components={components} name="Records" />
    )
  }
  else {

    return (
      <div></div>
    )
  }

}
