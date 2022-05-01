import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Option from './Option';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { answered: false, correctly: false }
  }


  render() {
    const { questionId, question, check } = this.props;

    let renderedOptions = question.options.map((option, optionId) => <Option key={optionId} questionId={questionId} optionId={optionId + 1} option={option} />)
    return (
      <div className="mb-16">
        <div className="mb-2">Question {questionId}</div>
        <div className="mb-2">{question.text}</div>
        {renderedOptions}
        <button type="submit" className="border text-xs m-4  px-4 py-1.5  rounded-md bg-blue-600 text-white"
          onClick={e => {
            e.preventDefault();
            check(questionId);
          }}>Check</button>
      </div>
    )
  }
}

// <button type="button" class="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Check</button>

