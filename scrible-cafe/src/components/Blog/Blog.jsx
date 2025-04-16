import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            <h1>{blog.id}</h1>
            <div>
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={blog.cover}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{blog.title}</h2>
                        <div className='flex justify-centers items-center gap-5'>
                            <h2 className='text-3xl '>Author Name : {blog["author-name"]}</h2>
                            <img className='w-20 cover rounded-full' src={blog["author-img"]} alt="" />
                            <FaBookmark size={30}/>
                        </div>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className='flex gap-8 text-2xl *:'>
                                {
                                    blog["hash-tags"].map(hashtag => <p hashtag={hashtag} >{hashtag} </p>)
                                }
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-primary">Mark as read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;