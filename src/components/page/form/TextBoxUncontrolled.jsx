import React from 'react';

export default class TextBoxAsUncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {component:{}}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
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