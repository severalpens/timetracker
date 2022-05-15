import Page from './page/Page.jsx';

import {  useState } from 'react';


export default function Records() {
  const [render, setRender] = useState(false);
  const cType = "record";
  const props = {
    render,
    setRender,
    cType
  }
    return (
      <Page  props={props}/>
    )
}
