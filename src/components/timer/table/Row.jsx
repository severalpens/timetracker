import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: this.props.task.description
    }
    
    this.handleStartStop = this.handleStartStop.bind(this);
  }

handleStartStop = async (e) => {
  e.preventDefault();
  const t = {...this.props.task}
  if(t.isActive){
    t.endTime = new Date().getTime()
    t.isActive = false;
  }else{
    t.startTime = new Date().getTime()
    t.isActive = true;
  }

  await API.graphql({
    query: mutations.updateComponent,
    variables: { input: t },
    authMode: 'AMAZON_COGNITO_USER_POOLS'
})

const r = {...t}
r.name = ""
r.parentId = t.name
r.type = "record"


await API.graphql({
  query: mutations.createComponent,
  variables: { input:r },
  authMode: 'AMAZON_COGNITO_USER_POOLS'
})

}

  render() {
    return (
      <tr key={this.props.task.id}>
        <td className="flex justify-between px-6 whitespace-nowrap w-82">
          <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{this.props.task.parentId}</div>
          <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{this.props.task.name}</div>
          <div className="flex">
          <button onClick={this.handleStartStop} className="border m-4  px-6 py-2.5 border-black rounded-md">{this.props.isActive ? "Running" : "Start"}</button>
          </div>

        </td>
      </tr>
    )
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

