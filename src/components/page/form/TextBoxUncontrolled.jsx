import React from 'react';

export default class TextBoxAsUncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {component:{}}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  async handleSubmit(event) {
    const c = this.state.component;
    c.name =  this.input.current.value;
    this.setState({component: c})
    await this.props.mutationRequest(this.state.component, "create");
    this.setState({component:{}});
    this.input.current.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}