import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';
import InputTextEmpty from "./InputTextEmpty";
import { useNavigate } from "react-router-dom";
import InputProject from "./InputProject";
import { IconPhoneBluetoothSpeaker } from "@aws-amplify/ui-react";
import TaskInput from "./TaskInput";

export default class TaskFormClass extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state =  {projectTasksId: '',  name:''};
  }


   handleSubmit = async (event) => {
    const {name, projectTasksId}  = this.state;
    const input = { name, projectTasksId };
    console.log(input);
    event.preventDefault();
    await API.graphql({ query: mutations.createTask, variables: { input } });
    await this.props.fetchData();  
    this.setState({name:''})
  }

   handleChange = (e) => {
    this.setState({name: e.target.value})
  }
  
  setProjectTasksId = (projectTasksId) => {
    this.setState({projectTasksId});
  }

  render(){
    return(
      <div className="ml-16 my-16 ">
        <h3 className="text-lg">Add new task:</h3>
        <form className="" onSubmit={this.handleSubmit}>
          <div className="mb-3 xl:w-96">
            <InputProject projects={this.props.projects} setProjectTasksId={this.setProjectTasksId}/>
            <TaskInput name={this.state.name}  handleChange={this.handleChange} />
          
          </div>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
)
  }
}

// export default function TaskForm(props) {
//   const { fetchData, tasks, setTasks } = props;
//   const [taskName, setTaskName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//   }, []);
  

//   const handleSubmit = async (event) => {
//     let input = { name: taskName }
//     event.preventDefault();
//     await API.graphql({ query: mutations.createTask, variables: { input } });
//     await fetchData();  

//     setTaskName('')
//     navigate("/", { replace: true , });
//     renderer();
//   }

//   const handleChange = (e) => {
//     setTaskName(e.target.value);
//   }

//   const renderer = () => {
//     return (
//       <div className="ml-16 my-16 ">
//         <form className="" onSubmit={handleSubmit}>
//           <div className="mb-3 xl:w-96">
//             <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Add new task:</label>
            
//             <input type="text" className="
//                       form-control
//                       block
//                       w-full
//                       px-3
//                       py-1.5
//                       text-base
//                       font-normal
//                       text-gray-700
//                       bg-white bg-clip-padding
//                       border border-solid border-gray-300
//                       rounded
//                       transition
//                       ease-in-out
//                       m-0
//                       focus:text-gray-700
//                       focus:bg-white 
//                       focus:border-blue-600 
//                       focus:outline-none
//                     "
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
//         </form>
//       </div>
//     )


//   }

//   return(renderer())

// }
