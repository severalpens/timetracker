
import React from 'react';
import * as db from '../../../../db/db'
import { API } from 'aws-amplify';
import * as mutations from '../../../../graphql/mutations';
import { Authenticator } from '@aws-amplify/ui-react';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      parentSetStrict: [],
      components: [],
      parentSet: [],
      type: props.cType,
      name: "",
      parentId: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
  }

  async componentDidMount(){
   const parentSet =  await db.getParentSet(this.props.cType,true);
   this.setState({
    parentSetStrict: parentSet
  })  
   this.setState({
    parentId: parentSet[0]
  })
  }

 handleSubmit = async (e) => {
    e.preventDefault()
    const input = {
      type: this.props.cType,
      name: this.state.name,
      description: "",
      parentId: this.state.parentId
    }
     await API.graphql({
      query: mutations.createComponent,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
  })
  this.props.setComponents();
  }

  handleChange = (e) => {
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
    const {parentSetStrict} = this.state;
    const parentOptions = parentSetStrict.map((x) =>  <option key={x} value={x}>{x}</option>)

    return (
      <Authenticator>
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
              {parentOptions}
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
      </Authenticator>
    )
  }
}

export default Form