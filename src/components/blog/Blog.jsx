 
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookmarks,handleMarkAsRead}) => {
     const {title,cover, author_img, name, posted, time, hashtags, } = blog
    return (
        <div>
            <img className="md:w-full pt-10" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex pt-8">
                    <div>
                        <img className="w-14  " src={author_img} alt="" />
                    </div>
                    <div className="ml-4">
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <p className="text-base font-semibold text-[#11111199]">{posted}</p>
                    </div>
                </div>
                <div>
                    <span className="text-xl font-medium text-[#11111199]">{time} min read</span>
                    <button className='pl-4' onClick={()=>handleBookmarks(blog)}> < FaBookmark></ FaBookmark></button>
                </div>
            </div>
            <h1 className="text-5xl pt-4 font-bold pb-4">{title}</h1>
            <p className="text-xl font-medium text-[#11111199]  pb-10">{hashtags}</p>
            <button className='pb-10 underline text-purple-700 font-bold ' onClick={() => handleMarkAsRead(time)}>Mark as read</button>
        </div>
    );
};

 
export default Blog;
