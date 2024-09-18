import React, { useState } from 'react'
import {Questionlist} from './List';
import './index.css'
// export default function File() {
//     const questions = [
//         {
//           question:"what is react?",
//          options:["css frame work","react library","both","none"],
//          answer:"react library"
    
//         },  {
//           question:"what is 2+2?",
//          options:["3","50","4","6"],
//          answer:"4"
    
//         },  {
//           question:"what is 6+2?",
//          options:["3","8","4","6"],
//          answer:"8"
    
//         },  {
//           question:"what is 2-2?",
//          options:["3","10","4","0"],
//          answer:"0"
    
//         }
//       ]
//       const [currentQI , SetcurrentQI] = useState(0);
//       const [currentAns , SetcurrentAns] = useState(null);
//       const handleClick= (options) => {
//       SetcurrentAns(options)

//       }
//       const handleNextque = ()=>{
//         SetcurrentQI(currentQI + 1);
//         SetcurrentAns(null);
//       }
//   return (
//     <div>
//          <Questionlist 
//       question = {questions[currentQI].question} 
//       options = {questions[currentQI].options} handleClick={handleClick}
//       currentAns={currentAns}/>
//       <button disabled={currentAns === null} 
//       className={currentAns === null ? 'button.disable' : 'button'} 
//       onClick={handleNextque}>next question</button>
//     </div>
//   )
// }
export default function File() {
  const questions = [
      {
          question: "What is React?",
          options: ["CSS framework", "React library", "Both", "None"],
          answer: "React library"
      },
      {
          question: "What is 2+2?",
          options: ["3", "50", "4", "6"],
          answer: "4"
      },
      {
          question: "What is 6+2?",
          options: ["3", "8", "4", "6"],
          answer: "8"
      },
      {
          question: "What is 2-2?",
          options: ["3", "10", "4", "0"],
          answer: "0"
      }
  ];

  const [currentQI, setCurrentQI] = useState(0);
  const [currentAns, setCurrentAns] = useState(null);
  const [score, setscore] = useState(0);
  const handleClick = (options) => {
      setCurrentAns(options);
      if(options === questions[currentQI].answer)
        setscore(score + 1)
  };

  const handleNextQue = () => {
      setCurrentQI(currentQI + 1);
      setCurrentAns(null);
  };

  // const isLastQuestion = currentQI === questions.length - 1;

  return (
      <div>
        {currentQI < questions.length ? (<div>
          <Questionlist
              question={questions[currentQI].question}
              options={questions[currentQI].options}
              handleClick={handleClick}
              currentAns={currentAns}
          />
          <button
              disabled={currentAns === null}
              className={currentAns === null ? 'button disable' : 'button'}
              onClick={handleNextQue}
          >
            next question
              {/* {isLastQuestion ? 'Finish' : 'Next Question'} */}
          </button>
        </div>)  : (<div>Your score is {score}</div>) }
        
          
      </div>
  );
}
