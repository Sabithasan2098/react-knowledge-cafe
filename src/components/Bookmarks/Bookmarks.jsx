import Bookmark from "../../Bookmark/Bookmark"; 

const Bookmarks = ({bookmarks, read}) => {
     
    return (
        
       
           
            <div className="md:w-1/3 bg-slate-300 m-4 pt-4 p-2">
            <div className=" p-2 bg-purple-400 rounded-lg">
                <h3 className="text-2xl text-white font-bold">Spent of time of read: {read}</h3>
            </div>
            <h1 className=" text-3xl">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx)  => <Bookmark key={idx}  bookmark={bookmark}></Bookmark>)
            }
        </div>
         
    );
};

export default Bookmarks;