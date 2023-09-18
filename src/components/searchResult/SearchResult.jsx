import React from 'react';
import Sidebar from '../Sidebar';
import SearchPosts from './SearchPosts';

function SearchResult() {
    return (
        <>
            <div className='body-wrapper'>
                <div className='main-body-posts-wrapper'>
                    {/* <Posts /> */}
                    <SearchPosts />
                </div>
                <Sidebar />
            </div>
        </>
    )
}

export default SearchResult