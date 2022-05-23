import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      task: {}
    }

    this.handleStartStop = this.handleStartStop.bind(this);
  }

  componentDidMount() {

  }

  handleStartStop = async (e) => {
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

       API.graphql({
        query: mutations.createComponent,
        variables: { input: r },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      }).then(() => {
        console.log("success")
      }).catch(() => {
        console.log("error");
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


    await this.props.setComponents()

  }

  render() {
    if (this.props.task) {

      return (
        <Authenticator>
          <tr key={this.props.task.id} className="">
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.parentId}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.name}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.props.task.startTime).toLocaleString('en-AU', {})}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.props.task.endTime).toLocaleString('en-AU', {})}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.isActive ? "true" : "false"}</td>
            <td>
              <button onClick={this.handleStartStop} className="border m-4  px-2 py-2.5 border-black rounded-md">{this.props.task.isActive ? "Running" : "Start"}</button>
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

