import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../../graphql/mutations';
import * as queries from '../../../graphql/queries';
import * as db from '../../../db/db';
import { Authenticator } from '@aws-amplify/ui-react';
import { update } from '../../../db/mutations';

const updateRecord = async (r) => {
  console.log("updateRecord",r);
  const result = await API.graphql({
    query: mutations.updateComponent,
    variables: { input: r },
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  })

  return result;
}

const createRecord = async (r) => {
  console.log("createRecord",r);

  const result = await API.graphql({
    query: mutations.createComponent,
    variables: { input: r },
    authMode: 'AMAZON_COGNITO_USER_POOLS'
  })

  return result
}

class Record {
  id;
  name = "";
  startTime = new Date().getTime();
  endTime;
  _version;
  type = 'record';
  parentId;
  isActive =  false;
  constructor(taskName){
    this.parentId = taskName
  }
  getCreateProps() {
    this.isActive = true;
    return {
      type: this.type,
      name: this.name,
      parentId: this.parentId,
      startTime: new Date().getTime(),
      endTime: null,
      isActive: this.isActive
    }
  }

  getUpdateProps() {
    return {
      id: this.id,
      startTime: this.startTime,
      endTime: new Date().getTime(),
      _version: this._version,
      isActive: false
    }

  }

  setUpdateProps(r) {
    this.id = r.id;
    this.startTime = r.startTime;
    this.endTime = r.endTime;
    this._version = r._version;
    this.isActive = r.isActive;
    return {
      id: this.id,
      startTime: this.startTime,
      endTime: this.endTime,
      _version: this._version,
      isActive: this.isActive
    }
  }
}

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props); 

    this.record = new Record(props.task.name);
    this.state = {
      isActive: false
    }
    
    this.handleStartStop = this.handleStartStop.bind(this);
    this.checkForExisting = this.checkForExisting.bind(this);
  }

  async componentDidMount(){
    await this.checkForExisting();
  }
  
 checkForExisting = async () => {
    let props = this.props;
    const allRecords = await db.getByCType("record")
    this.allRecords = allRecords;
    
    const records = allRecords.filter(x => x.parentId === props.task.name)
    .sort((x,y) => x.startTime - y.startTime)
    console.log(records);
    if (records.length > 0  ) {
      if(records.at(-1).isActive){
        console.log(records.at(-1));
        this.record.setUpdateProps(records.at(-1))
      }
    }
    console.log(this.record);
    this.setState({
      isActive: this.record.isActive
    })

  }

  async componentDidUpdate() {
  }

  handleStartStop = async (e) => {
    if (this.record.isActive) {
      await updateRecord(this.record.getUpdateProps())
      this.record = new Record(this.props.task.name);
      this.setState({
        isActive: false
      })
    }
    else {
      let result = await createRecord(this.record.getCreateProps());
      this.record.setUpdateProps(result.data.createComponent);
      console.log("Should have ID",this.record);
      this.setState({
        isActive: true
      })
    }
    


  }

  handleStartStopOld = async (e) => {
    console.log("componentdidUpdate");
    if (!this.state.record.isActive) {
      console.log("create record");
      let res2 = await createRecord(this.state.record);
      console.log(res2);
    }

    if (this.state.isActive) {
      this.setState({
        isActive: false,
        endTime: new Date().getTime()
      })
    } else {
      this.setState({
        isActive: true,
        startTime: new Date().getTime(),
        endTime: null
      })
    }

  }


  render() {

    return (
      <Authenticator>
        <tr key={this.props.task.id} className="">
          <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.parentId}</td>
          <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.props.task.name}</td>
          {/* <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.startTime).toLocaleString('en-AU', {})}</td>
            <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{new Date(this.state.endTime).toLocaleString('en-AU', {})}</td> */}
          <td className=" px-2 whitespace-nowrap text-sm text-gray-900">{this.state.isActive ? "true" : "false"}</td>
          <td>
            <button onClick={this.handleStartStop} className="border m-4  px-2 py-2.5 border-black rounded-md">{this.state.isActive ? "Running" : "Start"}</button>
          </td>
        </tr>
      </Authenticator>
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

