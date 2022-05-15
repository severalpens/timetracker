import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Row from './Row'
import { getAll, getByCType, getByParentId} from '../../../db/queries.ts';


export default class Table2 extends React.PureComponent{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
    };
  }
  
  render(){
    const { mutationRequest, components} = this.props;
    const rows =  components.map((x) => <Row key={x.id}  component={x} mutationRequest={mutationRequest}/>)
  return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Records
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                
              </th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}