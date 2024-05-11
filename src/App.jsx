import { useState } from 'react'
import './App.css'
import Course from './components/Course'
import Bookmarks from './components/bookmarks/Bookmarks'
import Credits from './components/credits/Credits'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [credits,setCredits] = useState(0)

  const handleBookmark = blog =>{
    const newBookmark = [...bookmarks, blog]
    if(bookmarks.includes(blog)){
      alert('Warning: This course has already been clicked.');
    }else{
      setBookmarks(newBookmark)
      setCredits(prevCredits => prevCredits + 1); 
    }
  }

  return (
    <>
    <div className='container-fluid'> 
      <h1>course registration</h1>
      <div className='d-flex justify-content-between gap-3'>
      <Course 
        handleBookmark={handleBookmark}
      ></Course>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
      <Credits credits={credits}></Credits>
    </div>
      
    </>
  )
}

export default App
