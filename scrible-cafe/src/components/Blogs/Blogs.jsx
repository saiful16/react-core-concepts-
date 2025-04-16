import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarks}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    // console.log(blogs)
    return (
        <div>
            <h1 className='text-3xl'>Length : {blogs.length}</h1>
            <div className="all-blogs">
                {
                    blogs.map((blog)=><Blog handleBookmarks={handleBookmarks} key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;