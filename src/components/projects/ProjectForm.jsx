import { useState, useEffect } from "react";
import InputText from "./InputText";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';
import InputTextEmpty from "./InputTextEmpty";


export default function ProjectForm(props) {
  const {fetchData, projects, setProjects} = props;
const [projectName, setProjectName] = useState('');

  useEffect(() => {
  }, []);
  

  const handleSubmit = async (event) => {
    let input = {name:projectName}
    event.preventDefault();
    await API.graphql({ query: mutations.createProject, variables: { input } });
    await fetchData();
  }


  return (
    <div className="ml-16 my-16 ">
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Add new project:</label>
          <InputTextEmpty setProjectName={setProjectName}/>
        </div>
        <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    </div>
  )
}
