import React from 'react';
import Row from './Row'


export default class Table2 extends React.PureComponent{
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
    };
  }
  
  render(){
    const {  records} = this.props;
    const r = records.sort((x,y) => x.updatedAt - y.updatedAt)
    const rows =  r.map((x) => <Row key={x.id}  record={x} />)
  return (
      <div className="shadow  border-b border-gray-200 sm:rounded-lg">
        <table className="table-auto divide-y divide-gray-200 w-full">
          <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Records
              </th>
              <th scope="col" className="relative px-6 py-3">Start</th>
              <th scope="col" className="relative px-6 py-3">Stop</th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 px-6">
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}