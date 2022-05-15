
import  React from 'react';

export default class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  async handleSubmit(e) {
    const c = {
      name:  this.input.current.value
    }
    await this.props.mutationRequest(c, "create");
    this.input.current.value = "";
  }


  render() {
    return (
      <div className="ml-16 my-16 w-1/3">
      <h2 className="font-medium leading-tight text-4xl mt-0 text-blue-600 pb-10">Add New:</h2>
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

