import React, { useState } from 'react'

function Form() {
  const [item , setItem]=useState("")
  const [item1 , setItem1]=useState([])
  const submitHandle = () => {
    if (item) { // Check if item is not empty
      setItem1([...item1, item]);
      setItem("");
  }
};
const handleDelete = (key) => {
  setItem1(item1.filter((data, id) => key !== id));
console.log("del")
} 


  return (
    <>
      <input type="text" placeholder='add item '
      value={item}
      onChange={(e)=>{setItem(e.target.value)}} />
      <button onClick={submitHandle}>
        add
      </button>
      {item1.map((data, key) => (
        <div  >
          <p>{data}</p>
          <button onClick={() => handleDelete(key)}>delete</button>
        </div>


      
    ))}

    </>
  )
}

export default Form
