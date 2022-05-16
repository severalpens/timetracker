
import React from 'react';
import * as db from '../../../db/db.ts';


export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      components: [],
      parentSet: [],
      type: props.cType,
      name: "",
      parentId: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = async (e) => {
    await this.props.mutationRequest({
      type: this.props.cType,
      name: this.input.current.value,
      parentId: this.state.parentId
    }, "create");
  }

  handleChange = async (e) => {

  }


  render() {
    const { cType, pType } = this.props;
    let p = this.state.parentSet.map(x => <option key={x} value={x}>{x}</option>)

    return (
      <form className="width-full flex" onSubmit={this.handleSubmit} >
        <select id='parent' name='parent' className="border mx-4 px-6 border-black rounded-md form-select"
          aria-label="Default select example" onChange={this.handleParentChange}>
          {p}
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
        <button type="submit" className=" ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
      </form>
    )
  }
}

