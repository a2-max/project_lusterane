import React from 'react'
import Sidebar from '../Sidebar'
import AuthorCard from './AuthorCard'
import AuthorPosts from './AuthorPosts'

function author() {
    return (
        <>
            <div className='body-wrapper'>
                <div className='main-body-posts-wrapper'>
                    {/* <Posts /> */}
                    <AuthorCard />
                    <AuthorPosts />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default author