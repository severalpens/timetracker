import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import * as db from '../../../db/db';
import { Authenticator } from '@aws-amplify/ui-react';
import { update } from '../../../db/mutations';
import { graphqlOperation,Hub, Auth } from 'aws-amplify'
import { isConstructorTypeNode } from 'typescript';
class Task {

  __typename = "Component";
  id;
  parentId;
  type;
  name;
  description;
  isActive;
  startTime;
  endTime;
  children;
  createdAt;
  updatedAt;
  _version;
  _deleted;
  _lastChangedAt;
  owner;
  
  constructor(t){
    this.id = t.id;
    this.parentId = t.parentId;
    this.type = t.type;
    this.name = t.name;
    this.description = t.description;
    this.isActive = t.isActive;
    this.startTime =  t.startTime;
    this.endTime = t.endTime;
    this.children = t.children;
    this._version = t._version;
  };
  getUpdateProps(){
    return {
      id: this.id,
      isActive: this.isActive,
      startTime: this.startTime,
      endTime: this.endTime,
      _version: this._version
    }
};

};

class Record {
  id;
  name = "";
  startTime = new Date().getTime();
  endTime;
  _version;
  type = 'record';
  parentId;
  isActive =  false;

  constructor(taskName,startTime, endTime){
    this.parentId = taskName
    this.startTime = startTime
    this.endTime = endTime
  }

  getCreateProps = () => {
    this.isActive = true;
    return {
      type: this.type,
      name: this.name,
      parentId: this.parentId,
      startTime: this.startTime,
      endTime: this.endTime,
      isActive: this.isActive
    }
  }

  getUpdateProps = () => {
    return {
      id: this.id,
      startTime: this.startTime,
      endTime: this.endTime,
      _version: this._version,
      isActive: false
    }
  }

}

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props); 
    this.state = {
      task: null
    }
    
    this.handleStartStop = this.handleStartStop.bind(this);
  }

  async componentDidMount(){
    var t = await API.graphql(graphqlOperation(queries.getComponent, { id: this.props.task.id }));

    this.setState({
      task: t.data.getComponent
    })
  }

  handleStartStop = async () => {
    let task = new Task(this.state.task)
    console.log(task);
    if(task.isActive === false){
      console.log('false');
      task.isActive = true
      task.startTime = new Date().getTime();
      task.endTime = 0;
      let input = task.getUpdateProps();
      console.log(input);
      await API.graphql({
        query: mutations.updateComponent,
        variables: { input },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
    })
    await this.componentDidMount();

    }
    else{
      console.log('true');
      task.isActive = false;
      task.endTime = new Date().getTime();
      var record = new Record(task.name, task.startTime, task.endTime);
      await API.graphql(graphqlOperation(mutations.createComponent, { input: record.getCreateProps() }));
      await API.graphql({
        query: mutations.updateComponent,
        variables: { input: task.getUpdateProps() },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      })
      await this.componentDidMount();
    }
  }

  render() {
    if(this.state.task){
          let task = this.state.task;
      return (
        <Authenticator>
          <tr key={task.id} className="">
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{task.parentId}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{task.name}</td>
            {/* <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.startTime).toLocaleString('en-AU', {})}</td>
              <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.endTime).toLocaleString('en-AU', {})}</td> */}
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{task.isActive ? "true" : "false"}</td>
            <td>
              <button onClick={this.handleStartStop} className="border m-4  px-2 py-2.5 border-black rounded-md">{task.isActive ? "Running" : "Start"}</button>
            </td>
          </tr>
        </Authenticator>
      )

    }
  }
}


