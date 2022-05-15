
import React from 'react';

export default class TextBoxUncontrolled extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { component: {} }
    this.props = props;
    this.input = React.createRef();

  }

  handleChange = (e) => {
    const c = this.state.component;
    c.name = e.target.value;
    this.setState({component:c})
 }


  async componentDidMount() {
    this.setState({ component: {} })
  }

  render() {
    return (
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
    )

  }

}


