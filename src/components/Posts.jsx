import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import CategoryWisePost from './CategoryWisePost';
import RandomPost from './RandomPost';


const PostArea = (props) => {
    return (
        <>
            <div className='post-wrapper'>
                <div className='header'>
                    <span className='categoryName'>{props.Category}</span>
                    <Link to='#' className='showMoreBtn'>Show More</Link>
                </div>
                <div className='divider'></div>
                {/* Posts List */}
                <div className={`posts-wrap ${props.styleClass}`}>
                    <CategoryWisePost />
                </div>
            </div>
        </>
    )
}

// Main Function 
function Posts() {
    return (
        <>
            {/* <PostArea
                Category="Technology"
                // styleClass="style"
            />
            <PostArea
                Category="JavaScript"
                styleClass="style1"
            /> */}

            {/* Random Post */}
            <RandomPost />


            <PostArea
                Category="PHP"
                styleClass="style1"
            />
        </>
    )
}

export default Posts