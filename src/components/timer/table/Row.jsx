import React, { useState, useEffect } from 'react';

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: props.task.description !== "",
      task: {...this.props.task}
    }

    this.handleStartStop.bind(this);
    
  }


  handleStartStop = (e) => {    
    if (!this.state.isRunning) {
      this.props.startTask(this.props.task)
    }
    else {
      this.props.stopTask(this.props.task)
    }
  }


  render() {
    return (
      <tr key={this.props.task.id}>
        <td className="flex justify-between px-6 whitespace-nowrap w-82">
          <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{this.props.task.parentId}</div>
          <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{this.props.task.name}</div>
          <div className="flex">
            <ToggleButton isRunning={this.state.isRunning} handleStartStop={this.handleStartStop} />
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

