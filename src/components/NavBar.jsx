import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Logo from '../partials/image/logo.png'
import '../partials/css/nav.css';
import { FaSearch, FaCaretUp, FaTimes } from "react-icons/fa";

function NavBar() {

    const [show, setShow] = useState(true);
    const [cross, setCross] = useState(true);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className='nav-wrapper'>
                <div className='nav-content'>
                    {/* Logo */}
                    <Link to="/">
                        <img src={Logo} alt="Lusterane Logo" className='logo' />
                    </Link>

                    {/* Nav Links */}
                    <div className={click ? 'activeLinks links' : 'links'}>
                        <Link to="/" className='link'>Home</Link>
                        <Link to="" className='link'>About</Link>
                        <Link to="" className='link'>Contact</Link>
                        <Link to="" className='link'>Services</Link>
                        <Link to="" className='link'>JavaScript</Link>
                        <Link to="" className='link'>React Native</Link>

                        {/* Search Icon */}
                        <span>
                            {
                                cross ? <FaSearch className='menu' onClick={() => {
                                    setShow(!show); setCross(!cross)
                                }} /> :
                                    <FaTimes className='menu' onClick={() => { setShow(!show); setCross(!cross) }} />
                            }
                        </span>

                        {/* Search Box */}
                        {
                            show ? null : <form className='searchbox'>
                                <FaCaretUp className='triangle' />
                                <input type="search" placeholder='Searching for...' className='searchinput' />
                                <input type="submit" value='ok' className='submitBtn' />
                            </form>
                        }
                    </div>

                    {/* Hamburger Icon */}
                    <div className={click ? 'hamburger hamCross' : 'hamburger'} onClick={handleClick}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar