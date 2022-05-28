
import React from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import { Authenticator } from '@aws-amplify/ui-react';

class FormPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        parentIdSet: "",
        name: "",
        parentId: "",
        type: props.cType
    }
    this.getParentSetStrict = this.getParentSetStrict.bind(this);
  }
  
  async getParentSetStrict(){

    if(this.props.cType === "project"){
      this.setState({
          parentIdSet: ["app"],
          parentId: "app"
      })
 
    }else{
    const allComponents = await API.graphql({ query: queries.listComponents, authMode:"AMAZON_COGNITO_USER_POOLS"});
    const data = allComponents.data.listComponents.items
       .filter((c) => c._deleted == null)
       .filter((c) => c.type === this.props.pType)
       .reduce((c) => c.name)
       const parentIdSet = [...new Set(data)];
       this.setState({
        parentIdSet: parentIdSet,
        parentId: parentIdSet[0]
    })


   }

  }

  async componentDidMount(){
    await this.getParentSetStrict();

  }

 handleSubmit = async (e) => {
    e.preventDefault()
    const input = {
      type: this.props.cType,
      name: this.state.name,
      parentId: this.state.parentId
    }
    console.log(input);
     await API.graphql({
      query: mutations.createComponent,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
  })
  }

  handleChange = (e) => {
    const input = {
      type: this.props.cType,
      name: this.state.name,
      parentId: this.state.parentId
    }
    console.log(input);
    this.setState({
      name: e.target.value
    })
  }

  handleParentChange = (e) => {
    this.setState({
      parentId: e.target.value
    })
  }


  render() {
if(this.state.parentIdSet){

  return (
      <form className="flex flex-col gap-8 w-96" onSubmit={this.handleSubmit} >
          <select className="
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
            id="selectParent"
            name="selectParent"
            value={this.state.parentId}
            onChange={this.handleParentChange}
          >
              {this.state.parentIdSet.map((x) =>  <option key={x} value={x}>{x}</option>)}
          </select>
        <input
          id="inputName"
          type="text"
          className="
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
                    min-w-min
                  "
          onChange={this.handleChange}
        />
        <button type="submit" className="border px-3 w-32 py-1.5 border-black rounded-md">Submit</button>

      </form>
    )
  }
  }
}

export default FormPage