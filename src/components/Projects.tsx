/* src/App.js */
import "reflect-metadata";
import React, { CSSProperties, DetailedHTMLProps, useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createProject } from '../graphql/mutations';
import { listProjects } from '../graphql/queries';

import awsExports from "../aws-exports";
import { Project, CreateProjectInput, ListProjectsQuery } from '../API';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

// const initialState = { name: '', description: '' }

const App = () => {
  const initialState: CreateProjectInput = {
    //__typename: "Project",
    //id: "",
    //createdAt: "",
   // updatedAt: "",
    name: ""
  }  
  const [formState, setFormState] = useState(initialState)
  const [projects, setProjects] = useState<CreateProjectInput[]>([])

  
  useEffect(() => {
    fetchProjects()
  }, [])

  function setInput(key:any, value:any) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchProjects() {
    try {
      const projectData: GraphQLResult<any> = await API.graphql(graphqlOperation(listProjects))
      const projects = projectData.data.listProjects.items
      setProjects(projects)
    } catch (err) { console.log('error fetching projects') }
  }

  async function addProject() {
    try {
      if (!formState.name) return
      const project:CreateProjectInput = {
        ...formState,
        //__typename: "Project",
        //id: "",
       // createdAt: "",
       // updatedAt: "",
      }
      setProjects([...projects, project])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createProject, {input: project}))
    } catch (err) {
      console.error('error creating project:', err);
    }
  }

  return (
    <Authenticator>
    <div style={container}>
      <h2>Amplify Projects</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <button style={styles.button} onClick={addProject}>Create Project</button>
      {
        projects.map((project, index) => (
          <div key={project.id ? project.id : index} style={styles.project}>
            <p style={styles.projectName}>{project.name}</p>
          </div>
        ))
      }
    </div>
    </Authenticator>
  )
}
const container:any = { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 }

const styles = {
  project: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  projectName: { fontSize: 20, fontWeight: 'bold' },
  projectDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App