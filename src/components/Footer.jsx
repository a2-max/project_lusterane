import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import '../partials/css/footer.css';
import Logo from '../partials/image/logo.png';




const ColOne = () => {
    const fullDate = new Date();
    const CurrentYear = fullDate.getFullYear();

    return (
        <>
            <div className='column column1'>
                <img src={Logo} alt="Lusterane Logo" className='logo-footer' />
                <span className='BrandName'>Lusterane</span>
                <a href='#' className='email'><FaRegEnvelope className='icon' /> mailus@lusterane.com</a>
                <p className='copyright'>© 2021 - {CurrentYear} | All Rights Reserved</p>
            </div>
        </>
    );
}

const ColTwo = () => {
    return (
        <>
            <div className='column column2'>
                <span className='heading'>Quick Links</span>
                <div className='links'>
                    <Link to='#' className='link'>Home</Link>
                    <Link to='#' className='link'>About</Link>
                    <Link to='#' className='link'>Contact</Link>
                    <Link to='#' className='link'>Services</Link>
                    <Link to='#' className='link'>Disclaimer</Link>
                    <Link to='#' className='link'>JavaScript</Link>
                    <Link to='#' className='link'>PHP</Link>
                    <Link to='#' className='link'>Privacy Policy</Link>
                </div>
            </div>
        </>
    );
}
const ColThree = () => {
    return (
        <>
            <div className='column column3'>
                <span className='heading'>Categories</span>
                <div className='links'>
                    <Link to='#' className='link'>Home</Link>
                    <Link to='#' className='link'>About</Link>
                    <Link to='#' className='link'>Contact</Link>
                    <Link to='#' className='link'>Services</Link>
                    <Link to='#' className='link'>Disclaimer</Link>
                    <Link to='#' className='link'>JavaScript</Link>
                    <Link to='#' className='link'>PHP</Link>
                    <Link to='#' className='link'>Privacy Policy</Link>
                </div>
            </div>
        </>
    );
}
function Footer() {
    return (
        <>
            <div className='footer-max-width'>
                <div className='footer-wrapper'>
                    <ColOne />
                    <ColTwo />
                    <ColThree />
                </div>
            </div>
        </>
    )
}

export default Footer