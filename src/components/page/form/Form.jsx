
import TextBox from './TextBoxAsClass';
import  React from 'react';

export default class FormAsClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {component:{}}
    this.props = props;
  }

  submitHandler = async (e) => {
    e.preventDefault();
    await this.props.mutationRequest(this.state.component, "create");
    this.setState({component:{}})
    document.getElementById("inputName").text = "";
    document.getElementById("inputName").value = "";
  }

  async componentDidMount(){
    this.setState({component:{}})
  }


  handleChange = (e) => {
    const c = this.state.component;
    c.name = e.target.value;
    this.setState({component:c})
 }

 
  render() {
    return (
      <div className="ml-16 my-16 w-1/3">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
        <form className="width-full flex" onSubmit={this.submitHandler} >
          <TextBox className="width-full " component="component" handleChange={this.handleChange} text="" />
          <button type="submit" className=" ml-5 border px-6 py-2.5 border-black rounded-md">Submit</button>
        </form>
    </div>
    )
  }
}

