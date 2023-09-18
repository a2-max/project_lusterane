import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import '../partials/css/featuredPost.css';
import FeaturedImage from '../partials/ClientsUploadedImage/pic1.png';

function FeaturedPosts() {
    return (
        <>
            <div className='featured-container'>
                {/* Main Featured Post */}
                <div className='main-post'>
                    <div className='overlay'></div>
                    <img src={FeaturedImage} alt='Featured Image' className='feature-image' />
                    <Link to='/post' className='postData'>
                        <span className='categoryCloud'>Technology</span>
                        <div className='description'>
                            <Link to='/post' className='postTitle'>Build your own portfolio website using HTML, CSS and JavaScript.</Link>
                            <div className='meta-data'>
                                <Link to='/author' className='author'><FaUser /> Rijan Neupane</Link>
                                <span className='date'><FaClock /> September 10, 2002</span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Side Featured Posts */}
                <div className='side-posts'>
                    <div className='top-post'>
                        <div className='overlay'></div>
                        <img src={FeaturedImage} alt='Featured Image' className='feature-image' />
                        <Link to='/post' className='postData'>
                            <span className='categoryCloud'>Technology</span>
                            <div className='description'>
                                <a href='/post' className='postTitle'>Build your own portfolio website using HTML, CSS and JavaScript.</a>
                                <div className='meta-data'>
                                    <Link to='#' className='date'><FaClock /> September 10, 2002</Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='bottom-post'>
                        <div className='bottomPost1'>
                            <div className='overlay'></div>
                            <img src={FeaturedImage} alt='Featured Image' className='feature-image' />
                            <Link to='/post' className='postData'>
                                <span className='categoryCloud'>Technology</span>
                                <div className='description'>
                                    <a href='/post' className='postTitle'>Build your own portfolio website using HTML, CSS and JavaScript.</a>
                                    <div className='meta-data'>
                                        <Link to='#' className='date'><FaClock /> September 10, 2002</Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='bottomPost2'>
                            <div className='overlay'></div>
                            <img src={FeaturedImage} alt='Featured Image' className='feature-image' />
                            <Link to='/post' className='postData'>
                                <span className='categoryCloud'>Technology</span>
                                <div className='description'>
                                    <a href='/post' className='postTitle'>Build your own portfolio website using HTML, CSS and JavaScript.</a>
                                    <div className='meta-data'>
                                        <Link to='#' className='date'><FaClock /> September 10, 2002</Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedPosts