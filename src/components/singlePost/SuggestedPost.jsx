import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import FeatureImage from '../../partials/ClientsUploadedImage/pic1.png';
import '../../partials/css/suggestedPost.css';

const SinglePost = (props) => {
    return (
        <>
            <div className='single-post'>
                <div className='overlay'></div>
                <div className='featureImage'>
                    <img src={props.Image} alt='Feature Image' className='image' />
                </div>
                <Link to={props.Link} className='postTitle'>{props.Title}</Link>
            </div>
        </>
    );
}

function SuggestedPost() {
    return (
        <>
            <div className='suggested-post-area'>
                <span className='heading'>Suggested Post</span>
                <div className='divider'></div>


                <div className='suggested-posts'>
                    <SinglePost
                        Image={FeatureImage}
                        Link="#"
                        Title="Build your own Portfolio Website using HTML, CSS and JavaScript"
                    />

                    <SinglePost
                        Image={FeatureImage}
                        Link="#"
                        Title="Build your own Portfolio Website using HTML, CSS and JavaScript"
                    />
                    <SinglePost
                        Image={FeatureImage}
                        Link="#"
                        Title="Build your own Portfolio Website using HTML, CSS and JavaScript"
                    />
                    <SinglePost
                        Image={FeatureImage}
                        Link="#"
                        Title="Build your own Portfolio Website using HTML, CSS and JavaScript"
                    />
                </div>
            </div>
        </>
    )
}

export default SuggestedPost