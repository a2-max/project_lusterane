import React from 'react';
import { Link } from "react-router-dom";
import FeatureImage from '../../partials/ClientsUploadedImage/pic1.png';
import '../../partials/css/widget.css';

const Post = () => {
    return (
        <>
            <div className='posts'>
                <div className='single-post'>
                    <img src={FeatureImage} alt='' className='featureImage' />
                    <Link to='#' className='postTitle'>Build your own portfolio website using HTML, CSS and Javascript.</Link>
                </div>
            </div>
        </>
    );
}

function PopularPost() {
    return (
        <>
            <div className='widget-wrapper'>
                <span className='header'>Popular Posts</span>
                <div className='divider'></div>

                {/* Calling Post Component */}
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </>
    )
}

export default PopularPost;