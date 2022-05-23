import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Row from './Row'
import { getAll, getByCType, getByParentId} from '../../../db/db.ts';


export default class Table extends React.PureComponent{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
    };
  }
  
  render(){

    const rows =  this.props.tasks.map((x) => <Row key={x.id}  task={x} setComponents={this.props.setComponents} />)
  return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="table-auto divide-y w-full divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
                <th scope="col"  className="">ParentId</th>
              <th scope="col" className="">Name</th>
              <th scope="col" className="">Start Time</th>
              <th scope="col" className="">End Time</th>
              <th scope="col" className="">Is Active</th>
              <th scope="col" className=""></th>
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