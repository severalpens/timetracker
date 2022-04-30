import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { API } from 'aws-amplify';
import InputTextEmpty from "./InputTextEmpty";
import { useNavigate } from "react-router-dom";

export default class EntryFormClass extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.state =  {entryName:''};
  }


   handleSubmit = async (event) => {
    let input = { name: this.state.entryName }
    event.preventDefault();
    await API.graphql({ query: mutations.createEntry, variables: { input } });
    await this.props.fetchData();  
    this.setState({entryName:''})
  }

   handleChange = (e) => {
    this.setState({entryName: e.target.value})
  }

  render(){
    return(
      <div className="ml-16 my-16 ">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="mb-3 xl:w-96">
            <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Add new entry:</label>
            
            <input type="text" className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700
                      focus:bg-white 
                      focus:border-blue-600 
                      focus:outline-none
                    "
              value={this.state.entryName}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
)
  }
}

// export default function EntryForm(props) {
//   const { fetchData, entries, setEntries } = props;
//   const [entryName, setEntryName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//   }, []);
  

//   const handleSubmit = async (event) => {
//     let input = { name: entryName }
//     event.preventDefault();
//     await API.graphql({ query: mutations.createEntry, variables: { input } });
//     await fetchData();  

//     setEntryName('')
//     navigate("/", { replace: true , });
//     renderer();
//     console.log('first')
//   }

//   const handleChange = (e) => {
//     setEntryName(e.target.value);
//   }

//   const renderer = () => {
//     return (
//       <div className="ml-16 my-16 ">
//         <form className="" onSubmit={handleSubmit}>
//           <div className="mb-3 xl:w-96">
//             <label className="form-label inline-block mb-2 text-gray-700" htmlFor="contract-type">Add new entry:</label>
            
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
