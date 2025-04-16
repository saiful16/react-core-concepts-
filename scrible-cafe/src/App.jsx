import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'


function App() {

  const [bookmarks, setBookmark] = useState([])
  const [count, setCount] = useState(0)

  const handleBookmarks = (blog) => {
    setBookmark([...bookmarks,blog])
    setCount(count + 1)
  }
console.log(bookmarks)
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex gap-5 text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookmarks={handleBookmarks} ></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time : {} </h1>
          <h1>Bookmark count : {count} </h1>
          {
            bookmarks.map(bookmark => <p>{bookmark.title} </p>)
          }
        </div>
      </div>

    </>
  )
}

export default App
