import Page from '../templates/page/Page';
import { Authenticator } from '@aws-amplify/ui-react';

function Projects() {

  return (
    <Authenticator>
      <div className="flex">
        <div className="ml-16 my-16 w-1/2">
          <h2 className="font-medium leading-tight text-4xl mt-0 mb-10 text-blue-600 capitalize">Projects</h2>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
              <table className="table-auto min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >

                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>

                  </tr>
                </tbody>
              </table>
          </div>
        </div>
        <div className="ml-16 my-16 w-1/3">
          <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
        </div>
      </div>
    </Authenticator>
  )
}


export default Projects

