import { Divider } from '@aws-amplify/ui-react';
import React from 'react'

const questions = [
  {
    id: "1",
    text: "How long is a piece of string?",
    options: [
      { id: "0", text: "chair", isCorrect: true },
      { id: "1", text: "book", isCorrect: false },
      { id: "2", text: "table", isCorrect: false },
    ],
  },
  {
    id: "2",
    text: "What does OLTP stand  for?",
    options: [
      { id: "0", text: "Online Transactional Processing", isCorrect: true },
      { id: "1", text: "Optional Length Typing", isCorrect: false },
      { id: "2", text: "One Length Type Progression", isCorrect: false },
    ],
  },
];

function Question(props) {
  let renderedOptions = props.question.options.map(option => <div key={option.id}>{option.text}</div>)
 return (
   <div>
     <div>{props.question.text}</div>
     {renderedOptions}
   </div>
 )
}


export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { questions }
  }

  renderedQuestions = questions.map((question) =>  <Question key={question.id} question={question}/>)
  render() {
    return (
      <div>
        {this.renderedQuestions}
      </div>
    )
  }
}

// export default function DVA_C01() {
//   return (
//     <div>asdf
//       {questions.forEach(question => {
//           <div>asdf
//             <div>{question.text}</div>
//             <div>
//               {question.options.forEach(option => {
//                   <div className="form-check">
//                     <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  id={option.id} />
//                     <label className="form-check-label inline-block text-gray-800" htmlFor={option.id}>
//                       {option.text}
//                     </label>
//                   </div>
//               })
//               }
//             </div>
//           </div>
//       })
//       }
//     </div>
//   )
// }
