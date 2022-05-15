
import React from 'react';
import { getByCType, getParentSet} from '../../../db/queries.ts';


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
    this.handleParentChange = this.handleParentChange.bind(this);
    this.input = React.createRef();
  }
  
async componentDidMount() {
  await this.getComponents();
}
getComponents = async () => {
  const {cType} = this.props;
  const c = await getByCType(cType)
  this.setState({
    components: c
  })
  this.setState({
    parentSet: await getParentSet(cType,true)
  })
}
async handleSubmit(e) {
    //this.setState({name: this.input.current.value})
    await this.props.mutationRequest({
      type: this.props.cType,
      name: this.input.current.value,
      parentId: this.state.parentId
    }, "create");
    this.input.current.value = "";
  }

  handleParentChange = (e) => {
    this.setState({ parentId: e.target.value })
  }

  getParentType() {
    switch (this.props.cType) {
      case "project":
        return "app"
        break;
      case "task":
        return "project"
        break;
      case "record":
        return "task"
        break;

      default:
        break;
    }
  }


  render() {
    let p = this.state.parentSet.map(x => <option key={x} value={x}>{x}</option>)
    return (
      <div className="ml-16 my-16 w-1/3">
        <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
        <div className="flex pb-10 " >
          <label htmlFor="parent" className="align-bottom  border font-medium leading-tight text-xl  text-blue-600 capitalize">{this.getParentType()}:</label>
          <select id='parent' name='parent' className="border mx-4 px-6 border-black rounded-md form-select"
            aria-label="Default select example" onChange={this.handleParentChange}>
            {p}
          </select>

        </div>

        <form className="width-full flex" onSubmit={this.handleSubmit} >
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
            ref={this.input}
          />
          <button type="submit" className=" ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
      </div>
    )
  }
}

