import getComponents from '../../db/getComponents.ts';
import mutationRequest from '../../db/processMutation.ts';
import { useEffect, useState } from 'react'
import Table from './table/Table';
import Form from './form/Form';


export default function Page(props) {
  const { render, setRender, cType } = props.props;
  const [components, setComponents] = useState([]);

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
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10 capitalize">{cType}</h2>
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
