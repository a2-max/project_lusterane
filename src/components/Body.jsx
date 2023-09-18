import React from 'react';
import Posts from './Posts';
import Sidebar from './Sidebar';
import '../partials/css/bodyPosts.css';
import '../partials/css/categoryWisePost.css';

function Body() {
    return (
        <>
            <div className='body-wrapper'>
                <div className='main-body-posts-wrapper'>
                    <Posts />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default Body;