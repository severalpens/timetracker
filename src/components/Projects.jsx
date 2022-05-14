import Page from './page/Page.jsx';
import getComponents from '../db/getComponents.tsx';
import createComponent from '../db/createComponent.tsx';
import updateComponent from '../db/updateComponent.tsx';
import deleteComponent from '../db/deleteComponent.tsx';

import { useContext, useEffect, useState } from 'react';


export default function Projects() {

    return (
      <Page  cType="Project"/>
    )
}
