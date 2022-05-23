import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.task.id,
      isActive: props.task.isActive,
      startTime: props.task.startTime,
      endTime: props.task.endTime,
      _version: props.task._version
    }

    this.handleStartStop = this.handleStartStop.bind(this);
  }

  componentDidMount() {

  }

  componentDidUpdate(){
    let t = {};
    t.id = this.state.id;
    t.isActive = this.state.isActive;
    t.startTime = this.state.startTime;
    t.endTime = this.state.endTime;
    t._version = this.state._version;

    let r = {};
    r.type = "record"
    r.name = ""
    r.description = ""
    r.parentId = this.props.task.name
    r.isActive = this.state.isActive;
    r.startTime = this.state.startTime;
    r.endTime = this.state.endTime;


    if(!t.isActive){
       API.graphql({
        query: mutations.updateComponent,
        variables: { input:t },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })

       API.graphql({
        query: mutations.createComponent,
        variables: { input: r },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
    }else{
      API.graphql({
        query: mutations.updateComponent,
        variables: { input:t },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
    }

  }

  handleStartStop = async (e) => {
    let t = {};
    t.id = this.state.id;
    t.isActive = this.state.isActive;
    t.startTime = this.state.startTime;
    t.endTime = this.state.endTime;
    t._version = this.state._version;

    let r = {};
    r.type = "record"
    r.name = ""
    r.description = ""
    r.parentId = this.props.task.name
    r.isActive = this.state.isActive;
    r.startTime = this.state.startTime;
    r.endTime = this.state.endTime;


    if(t.isActive){
      this.setState({
        isActive: false,
        endTime: new Date().getTime()
      })
      let t = {};
      t.id = this.state.id;
      t.isActive = this.state.isActive;
      t.startTime = this.state.startTime;
      t.endTime = this.state.endTime;
      t._version = this.state._version;
  
      let r = {};
      r.type = "record"
      r.name = ""
      r.description = ""
      r.parentId = this.props.task.name
      r.isActive = this.state.isActive;
      r.startTime = this.state.startTime;
      r.endTime = this.state.endTime;
      
       API.graphql({
        query: mutations.updateComponent,
        variables: { input:t },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })

       API.graphql({
        query: mutations.createComponent,
        variables: { input: r },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
    }else{
      this.setState({
        isActive: true,
        startTime: new Date().getTime(),
        endTime: null
      })

      let t = {};
      t.id = this.state.id;
      t.isActive = this.state.isActive;
      t.startTime = this.state.startTime;
      t.endTime = this.state.endTime;
      t._version = this.state._version;

            
      API.graphql({
        query: mutations.updateComponent,
        variables: { input:t },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })


  
    }

  }

    handleStartStop2 = async (e) => {
      e.preventDefault();
    const t = this.props.task

    const input = {
      id: t.id,
      _version: t._version
    }

    if (t.isActive) {
      input.endTime = new Date().getTime();
      input.isActive = false;

      const r = {
        name: "",
        parentId: t.name,
        type: "record",
        startTime: t.startTime,
        endTime: input.endTime,

      }

      await API.graphql({
        query: mutations.updateComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })

      await API.graphql({
        query: mutations.createComponent,
        variables: { input: r },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })

    } else {
      input.startTime = new Date().getTime()
      input.endTime = null
      input.isActive = true;

      await API.graphql({
        query: mutations.updateComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })




    }


   // await this.props.setComponents()

  }

  render() {
    if (this.props.task) {

      return (
        <Authenticator>
          <tr key={this.props.task.id} className="">
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.parentId}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.name}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.startTime).toLocaleString('en-AU', {})}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.endTime).toLocaleString('en-AU', {})}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.state.isActive ? "true" : "false"}</td>
            <td>
              <button onClick={this.handleStartStop} className="border m-4  px-2 py-2.5 border-black rounded-md">{this.state.isActive ? "Running" : "Start"}</button>
            </td>
          </tr>
        </Authenticator>
      )
    }
  }
}


function ToggleButton({ isRunning, handleStartStop }) {
  if (isRunning) {
    return (
      <button onClick={handleStartStop} className="border m-4 bg-green-800 text-white  px-6 py-2.5 border-black rounded-md">Running</button>
    )
  }
  return (
    <button onClick={handleStartStop} className="border m-4  px-6 py-2.5 border-black rounded-md">Start</button>
  )
}

