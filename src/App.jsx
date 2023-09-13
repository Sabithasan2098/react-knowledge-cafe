import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Blogs from "./components/Blogs";
import Bookmark from "./components/Bookmarks/Bookmarks";

function App() {
  const[bookmarks, setBookmarks] = useState([])
  const[read, setRead] = useState(0)
  const handleBookmarks = blog =>{
     const newBookmarks = [...bookmarks, blog]
     setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (id,time) => {
     const newRead =  read + time 
     setRead(newRead)
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmark)
  }
    return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmark bookmarks={bookmarks} read={read}></Bookmark>
      </div>
    </>
  );
}

export default App;
