import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import '../../partials/css/followLusterane.css';

const Icons = () => {
    return (
        <>
            <div className='icons'>
                <a href='http://www.facebook.com' target='_blank' rel="noreferrer" className='icon facebook'><FaFacebookF className='ico' /> <span className='count'>1.5k</span></a>
                <a href='http://www.instagram.com' target='_blank' rel="noreferrer" className='icon instagram'><FaInstagram className='ico' /> <span className='count'>1.5k</span></a>
                <a href='http://www.twitter.com' target='_blank' rel="noreferrer" className='icon twitter'><FaTwitter className='ico' /> <span className='count'>1.5k</span></a>
                <a href='http://www.youtube.com' target='_blank' rel="noreferrer" className='icon youtube'><FaYoutube className='ico' /> <span className='count'>1.5k</span></a>
                <a href='http://www.linkedin.com' target='_blank' rel="noreferrer" className='icon linkedin'><FaLinkedinIn className='ico' /> <span className='count'>1.5k</span></a>
            </div>
        </>
    );
}

function FollowLusterane() {
    return (
        <>
            <div className='widget-wrapper'>
                <span className='header'>Follow Lusterane</span>
                <div className='divider'></div>

                {/* Calling Icon Component */}
                <Icons />
            </div>
        </>
    )
}

export default FollowLusterane