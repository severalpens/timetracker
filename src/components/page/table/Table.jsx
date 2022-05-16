import React from 'react';
import Row from './Row'

export default class Table extends React.PureComponent {
  render() {
    const { update, deleteOne, cancel, components } = this.props.tableProps;
    return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
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
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                
              </th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {components.map((x) => <Row key={x.id} component={x} update={update} deleteOne={deleteOne} cancel={cancel} />)}
          </tbody>
        </table>
      </div>
    );
  }
}