import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import ProjectsTable from './ProjectsTable';
import ProjectForm from './ProjectForm';

export default function Projects(props) {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listProjects });
    let ps = graphqlResult.data.listProjects.items.filter(x => !x._deleted);
    setProjects(ps);

  }


  const editTask = async (t) => {
    await API.graphql({ query: mutations.updateProject, variables: { input: t } });
    await fetchData();
  }


  const saveProject = (t) => {

  }

  const addNew = () => {

  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let input = {
      name: projectName
    };

    await API.graphql({ query: mutations.createProject, variables: { input } });
    // navigate("/elements/accounts", { replace: true });
  }


  async function fetchData(){
    let graphqlResult = await API.graphql({ query: queries.listProjects });
    let ts = graphqlResult.data.listProjects.items.filter(x => !x._deleted);
    setProjects(ts);
  }

  const cancelEdit = (t) => {

  }


  return (
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Projects</h2>
        <div className="flex flex-wrap-reverse">
        <ProjectsTable fetchData={fetchData} projects={projects} setProjects={setProjects} />
        <ProjectForm  fetchData={fetchData}  projects={projects} setProjects={setProjects}/>
        </div>
    </div>

  );
}