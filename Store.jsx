import React, { useState } from 'react'
// import { base } from '../config/fb'
import {db} from '../config/firebase'
// import { fs } from '../config/fb'
import { collection } from 'firebase/firestore'
import { addDoc } from 'firebase/firestore'
const Store = () => {
    const [ title , setTitle] = useState('')
    const [ author , setAuthor] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
const Book = collection(db , 'Book')
 await addDoc(Book, { title, author })
            setTitle('')
            setAuthor('')
        } catch (error) {
            console.log(error)
            
        }
       
    }
    function hell(){
      console.log('hello')
    }
  return (
    <>
      <form onSubmit={handleSubmit} >
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <label htmlFor="author">Author</label>
            <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} />
        <button type='submit' onClick={hell} >add book</button>
        </div>
      </form>
    </>
  )
}

export default Store
