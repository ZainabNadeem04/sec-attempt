
import React from 'react'

// export default function Questionlist({question, options, handleClick, currentAns}) {
//   return (
//     <div>
//       <h2>{question}</h2>       
//        <ul>
//         {options.map((options, index)=> (
//           <li key={index} onClick={()=>handleClick(options)}
//           className={currentAns === options ? 'selected' : ''}>{options}</li>
//         ))}
//       </ul> 
      
      
//     </div>
//   )
// }
export function Questionlist({ question, options, handleClick, currentAns }) {
  return (
      <div>
          <h2>{question}</h2>
          <ul>
              {options.map((option, index) => (
                  <li
                      key={index}
                      onClick={() => handleClick(option)}
                      className={currentAns === option ? 'selected' : ''}
                  >
                      {option}
                  </li>
              ))}
          </ul>
      </div>
  );
}

