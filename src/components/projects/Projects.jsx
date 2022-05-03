import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import ProjectsTable from './ProjectsTable';
import ProjectForm from './ProjectForm';
import Modal from './Modal';
import './modal.css';



export default class Projects extends React.Component{
  constructor(props){
    super(props);
    this.props =props;
    this.state = {show: false, projects: []}
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  
  fetchData = async () => {
    let graphqlResult = await API.graphql({ query: queries.listProjects });
    let projects = graphqlResult.data.listProjects.items.filter(x => !x._deleted);
    this.setState({projects})
  }

  setProjects(projects){
    this.setState({projects})
  }

  
   deleteProject = async (project)  => {
    const  {id, _version} = project;
    const input = {id, _version};
    await API.graphql({ query: mutations.deleteProject, variables: { input } });
    await API.graphql({ query: mutations.deleteProject, variables: { input } });
    await this.fetchData();

    this.showModal();
  }

   cancelModal =() => {
    this.setState({show: false})
  }


  render(){
    return(
      <div className="ml-16 my-16 ">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Projects</h2>
        <Modal show={this.state.show} handleClose={this.hideModal} cancelModal={this.cancelModal}>
          <p>Modal</p>
        </Modal>
        <div className="flex flex-wrap-reverse">
        <ProjectsTable fetchData={this.fetchData} projects={this.state.projects} setProjects={this.setProjects} deleteProject={this.deleteProject} />
        <ProjectForm  fetchData={this.fetchData}  projects={this.state.projects} setProjects={this.setProjects}/>
        </div>
    </div>
    )
  }
}

export  function ProjectsFunction(props) {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    let graphqlResult = await API.graphql({ query: queries.listProjects });
    let ps = graphqlResult.data.listProjects.items.filter(x => !x._deleted);
    setProjects(ps);
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