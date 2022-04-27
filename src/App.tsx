/* src/App.js */
import "reflect-metadata";
import React, { CSSProperties, DetailedHTMLProps, useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createBlog } from './graphql/mutations';
import { listBlogs } from './graphql/queries';

import awsExports from "./aws-exports";
import { Blog, CreateBlogInput, ListBlogsQuery } from './API';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

// const initialState = { name: '', description: '' }

const App = () => {
  const initialState: CreateBlogInput = {
    //__typename: "Blog",
    //id: "",
    //createdAt: "",
   // updatedAt: "",
    name: ""
  }  
  const [formState, setFormState] = useState(initialState)
  const [blogs, setBlogs] = useState<CreateBlogInput[]>([])

  
  useEffect(() => {
    fetchBlogs()
  }, [])

  function setInput(key:any, value:any) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchBlogs() {
    try {
      const blogData: GraphQLResult<any> = await API.graphql(graphqlOperation(listBlogs))
      const blogs = blogData.data.listBlogs.items
      setBlogs(blogs)
    } catch (err) { console.log('error fetching blogs') }
  }

  async function addBlog() {
    try {
      if (!formState.name) return
      const blog:CreateBlogInput = {
        ...formState,
        //__typename: "Blog",
        //id: "",
       // createdAt: "",
       // updatedAt: "",
      }
      setBlogs([...blogs, blog])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createBlog, {input: blog}))
    } catch (err) {
      console.log('error creating blog:', err)
    }
  }

  return (
    <Authenticator>
    <div style={container}>
      <h2>Amplify Blogs</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <button style={styles.button} onClick={addBlog}>Create Blog</button>
      {
        blogs.map((blog, index) => (
          <div key={blog.id ? blog.id : index} style={styles.blog}>
            <p style={styles.blogName}>{blog.name}</p>
          </div>
        ))
      }
    </div>
    </Authenticator>
  )
}
const container:any = { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 }

const styles = {
  blog: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  blogName: { fontSize: 20, fontWeight: 'bold' },
  blogDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}

export default App