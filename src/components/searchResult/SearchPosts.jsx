import React from 'react';
import FeatureImage from '../../partials/ClientsUploadedImage/pic1.png';
import { Link } from "react-router-dom";
import '../../partials/css/searchResult.css';

const PostComponent = () => {
    return (
        <>
            <div className='search-single-post'>
                <div className='search-overlay'></div>
                <div className='search-featureImage'>
                    <img src={FeatureImage} alt='Feature Image' className='search-image' />
                </div>
                <Link to='/post' className='search-postTitle'>Create your own Portfolio Website using HTML CSS and JavaScript</Link>
            </div>
        </>
    )
}

// Main Function
function SearchPosts() {
    return (
        <>
            <div className='post-wrapper'>
                <div className='header'>
                    <span className='categoryName'>Search Result of: </span>
                </div>
                <div className='divider'></div>

                {/* Posts List start */}
                <div className={`search-posts-wrap`}>
                    <PostComponent />
                    <PostComponent />
                </div>
            </div>
        </>
    )
}

export default SearchPosts