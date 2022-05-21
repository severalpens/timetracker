import React, { useState , useEffect} from 'react';

export default class Row extends React.PureComponent{
  constructor(props){
    super(props);
    this.task = this.props;
    this.startTask = this.props;
    this.stopTask = this.props;

    this.state = {
      toggle: props.task.description
    }
    console.log("props.task.description", props.task.description);
  }

  
  toggleHandler = (e) => {
    const {task, startTask, stopTask} = this.props;
    const {toggle} = this.state;

    if(!toggle){
        startTask(task)
    }
    else{
        stopTask(task)
    }

    this.setState({
      toggle: !toggle    
    })

  }

render(){
    const {task} = this.props;
    const {toggle} = this.state;
      return (
                   <tr key={task.id}>
                      <td className="flex justify-between px-6 whitespace-nowrap w-82">
                      <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{task.parentId}</div>
                      <div className=" px-6 whitespace-nowrap w-82 text-sm text-gray-900">{task.name}</div>
                        <div className="flex">
                            <ToggleButton toggle={toggle} toggleHandler={this.toggleHandler}/>
                        </div>
            
                      </td>
                    </tr>
      )
    }
  }

    
    function ToggleButton({toggle, toggleHandler}) {
        if(toggle){
            return (
                <button  onClick={toggleHandler} className="border m-4 bg-green-800 text-white  px-6 py-2.5 border-black rounded-md">Running</button>
                )
            }
            return (
          <button  onClick={toggleHandler} className="border m-4  px-6 py-2.5 border-black rounded-md">Start</button>
      )
    }
    
