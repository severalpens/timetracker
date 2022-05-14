import React from 'react'
import getComponents from '../../db/getComponents.tsx';
import createComponent from '../../db/createComponent.tsx';
import updateComponent from '../../db/updateComponent.tsx';
import deleteComponent from '../../db/deleteComponent.tsx';


import { useContext, useEffect, useState } from 'react'
import Table from './table/Table';
import Form from './form/Form';
import { stringify } from 'querystring';


export default function Page({ cType }) {

  const [components, setComponents] = useState([]);
  const [render, setRender] = useState(false);

  const mutationRequest = async (component, mType) => {
    if (mType === "update") {
      await updateComponent(component);
      await fetchData();
      return true;
    }
    if (mType === "delete") {
      await deleteComponent(component);
      await fetchData();
      setRender(false);
      setRender(true);
    }
    if (mType === "cancel") {
      await fetchData();
    }
    if (mType === "create") {
      component.parentId = "app";
      component.type = cType;
      component.description = "";
      await createComponent(component);
      await fetchData();
      return true;
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    let c = await getComponents();
    let cc = c.filter(x => x.type === cType.toLowerCase());
    setComponents(cc);
    setRender(true);
  }

  if (render) {
    return (
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">{cType}</h2>
          <div className="flex w-full">
            <Table components={components} mutationRequest={mutationRequest}></Table>
          </div>
        </div>
        <Form mutationRequest={mutationRequest}></Form>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}
