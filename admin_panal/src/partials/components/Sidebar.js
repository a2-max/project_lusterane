import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faBars,
    faMagnifyingGlass,
    // faL,
    faBox,
    faUser,
    faMessage,
    faPieChart,
    // faFolder,
    faCog,
    faRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import "../css/sidebar.css";
import Logo from "../images/logo.png";
import Profile from "../images/rijan.jpg";

function Sidebar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className={click ? 'activeSidebar sidebar' : 'sidebar'}>
                <div className='header'>
                    <div className='logo'>
                        <img src={Logo} alt="Logo" className='logo-img' />
                        <span className='logo-txt'>Lusterane</span>
                    </div>
                    <div className='hamburger'>
                        <div className='line line1'></div>
                        <div className='line line2'></div>
                        <div className='line line3'></div>
                    </div>
                </div>

                <ul className='menu'>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faBox} className="icon" /> Dashboard</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faUser} className="icon" /> Services</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faPieChart} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faMessage} className="icon" /> Add Post</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faCog} className="icon" /> Settings</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faBox} className="icon" /> Dashboard</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faUser} className="icon" /> Services</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faPieChart} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faMessage} className="icon" /> Add Post</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faCog} className="icon" /> Settings</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faBox} className="icon" /> Dashboard</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faUser} className="icon" /> Services</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faPieChart} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faMessage} className="icon" /> Add Post</Link></li>
                    <li><Link to="#" className="link"><FontAwesomeIcon icon={faCog} className="icon" /> Settings</Link></li>
                    <li className="dropdown">
                        <Link className="dropdown-toggle link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" /> Dropdown link
                        </Link>

                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="#">Action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Another action 2</Link></li>
                            <li><Link className="dropdown-item" to="#">Something else here 2</Link></li>
                        </ul>
                    </li>
                </ul>

                {/* User Box */}
                <div className={click ? 'userBox userBox-res' : 'userBox'}>
                    <div className='profile'>
                        <img src={Profile} className='image' alt='user' />
                    </div>
                    <div className="user-info">
                        <h5 className='name'>Rijan Neupane</h5>
                        <h6 className='batch'>Diamond</h6>
                    </div>
                    <Link to="#" className='logout'><FontAwesomeIcon icon={faRightFromBracket} /></Link>
                </div>
            </div>

            <div className={click ? 'top-bar top-bar-res top-bar-active' : 'top-bar'} onClick={handleClick}>
                <div className={click ? 'hamburger hamCross' : 'hamburger'} onClick={handleClick}>
                    <div className='line line1'></div>
                    <div className='line line2'></div>
                    <div className='line line3'></div>
                </div>
            </div>
        </>
    )
}

export default Sidebar