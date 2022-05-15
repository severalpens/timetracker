import Page from './page/Page.jsx';

import {  useState } from 'react';


export default function Tasks() {
  const [render, setRender] = useState(false);
  const cType = "task";
  const props = {
    render,
    setRender,
    cType
  }
    return (
      <Page  props={props}/>
    )
}
