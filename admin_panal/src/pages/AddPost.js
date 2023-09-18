import React from 'react'
import PostForm from '../partials/components/PostForm'
import Sidebar from '../partials/components/Sidebar'
import "../partials/css/addPost.css"

function AddPost() {
    return (
        <>
            <div className='dashboard'>
                <Sidebar />
                <div className='dashboard-body'>
                <PostForm />
                </div>
            </div>
        </>
    )
}

export default AddPost