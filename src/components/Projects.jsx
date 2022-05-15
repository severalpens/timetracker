import Page from './page/Page.jsx';
import PageAsClass from './page/PageAsClass';

import {  useState } from 'react';


export default function Projects() {
  const [render, setRender] = useState(false);
  const cType = "project";
  const props = {
    render,
    setRender,
    cType
  }
    return (
      <PageAsClass  props={props}/>
    )
}
