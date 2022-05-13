import { useEffect, useState } from 'react';
import ProjectRow from './Row';

export default function ProjectsTable(props) {

  return (
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-1/2 min-w-min">
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th scope="col" className="relative px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects ? projects.map((project) => {
              return (
              <ProjectRow key={project.id} project={project} setProject={setProject} deleteProject={deleteProject}/>
            )}): null}
          </tbody>
        </table>
      </div>
    );
}