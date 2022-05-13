import React, { useState, useEffect } from "react";
import * as queries from '../../../graphql/queries';
import * as mutations from '../../../graphql/mutations';
import { API } from 'aws-amplify';
import ProjectInput from "./ProjectInput";
import { Component } from "../../../API";

type Props = {
  fetchData: Function;
};

type State = {
  projectName: string; 
};

export default class ProjectFormClass extends React.Component<Props, State>{
  state: State = {
    projectName: ''
  };


   handleSubmit = async (event: { preventDefault: () => void; }) => {
    let input = { name: this.state.projectName }
    event.preventDefault();
    await API.graphql({ query: mutations.createComponent, variables: { input } });
    await this.props.fetchData();  
    this.setState({projectName:''})
  }

   handleChange = (e: { target: { value: any; }; }) => {
    this.setState({projectName: e.target.value})
  }

  render(){
    return(
      <div className="ml-16 my-16 ">
        <form className="" onSubmit={this.handleSubmit}>
          <ProjectInput projectName={this.state.projectName} handleChange={this.handleChange}/>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
)
  }
}

