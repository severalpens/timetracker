import React from 'react'
import InputProject from '../form/ProjectInput';
import InputText from './TextBox';
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';


export default function ProjectRowEditMode(props) {
const {project, setInEditMode,setProject} = props;

const saveTask = async () => {
  let {id, name, _version}= project;
  let p = {id, name, _version};
  await API.graphql({ query: mutations.updateProject, variables: { input: p } });

  setInEditMode(false)
}
const cancelEdit = (t) => {
  setInEditMode(false)
}
  return (
            <tr key={project.id}>
                <td id="input1" className="px-6 py-4 whitespace-nowrap w-96">
                  <InputText project={project} setProject={setProject}/>
                </td>
                <td id="input2" className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      saveTask();
                    }}>Save</button>
                  <button type="submit" className="border m-4  px-6 py-2.5 border-black rounded-md"
                    onClick={e => {
                      cancelEdit(project);
                    }}>Cancel</button>
                </td>
              </tr>
  )
}
