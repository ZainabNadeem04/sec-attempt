import React, { useState, useEffect } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'
// import { useAuthState } from 'react-firebase-hooks/auth'


function Book() {
// const [user] = useAuthState(auth)
const [hello , setHello] = useState([])
const [edit , setEdit] = useState(false)
const [titleStore , setTitlestore] = useState('')
const [id , setId] = useState('')
const booksdata = collection(db, 'Book')
useEffect(()=>{
    async function getnov() {
const data = await getDocs(booksdata)
setHello(data.docs.map((dell) =>
   ({
    ...dell.data(),
    id: dell.id
   }) ))
   
    }
    getnov()   
},[])
const handleDel = async(id) =>{
  const nov = doc(db, 'Book', id)
  await deleteDoc(nov)
  setHello(hello.filter((data)=> data.id !== id))
}
const handleUpdate = (val) => {
setEdit(true);
setTitlestore(val.title);
setId(val.id);
}
const handleSave = async(id) => {
  try{  console.log('here is id' , id)
    const nov = doc(db, 'Book', id)
    await updateDoc(nov , {title : titleStore })
    setHello((prevbook) => 
    prevbook.map((bk) =>
    prevbook.id === id ? { ...bk, title: titleStore } : bk))
    setEdit(false)
  } catch(err){
    console.log(err)
  }

} 
// setMyBooks((prevBooks) =>
//   prevBooks.map((book) =>
//     book.id === id ? { ...book, title: titleStore } : book
//   )
const handleInput = (e)=>{
  setTitlestore(e.target.value)
}
  return (
    <>
     {edit &&
      <>
      <h1>Update product</h1>
      <input type="text" value={titleStore} onChange={handleInput} />
      <button onClick={()=>handleSave(id)}>Save</button>
      <button onClick={()=>setEdit(false)}>Cancel</button>
  </>
    }
    <h1>books</h1> 
     {hello.map((val)=>(
        <div key={val.id}>
            <h2>{val.title}</h2>
            <button onClick={()=>{handleDel(val.id)}}>delete</button>
            <button onClick={()=>{handleUpdate(val)}}>update</button>
        </div>
     ))} 
    </>
  )
}

export default Book
