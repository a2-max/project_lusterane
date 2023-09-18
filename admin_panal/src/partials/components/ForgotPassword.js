import React from 'react';
import "../css/login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faFacebook,
    // faInstagram,
    // faPinterest,
    // faYoutube
    faBox,
    faUser,
    faMessage,
    faPieChart,
} from '@fortawesome/free-solid-svg-icons';

function ForgotPassword() {
    return (
        <>
        <div className='login-wrapper'>
            <div className='login-insider'>
            <div className="card login-card">
                <div className="details">
                    <div className="overlayn"></div>
                    <h4 className="title">ONE ACCOUNT FOR ALL Lusterane SERVICES</h4>
                    <p className="tagline">Remember Password?</p>
                    <Link to="/login" className='create-account-btn'><button>Login Here</button></Link>
                </div>
                <div className="formarea">
                    <div className="content">
                        <h4 className="title">Reset Password</h4>
                        <form action="">
                            <div className="inputarea">
                                <input type="email" placeholder="Email Address" id="email" />
                                <FontAwesomeIcon icon={faUser} className="input-icon" />
                            </div>
                            <button type="submit">Send Reset Code</button>
                        </form>
                        <p className="social-network">Sign in with existing login from a social network account.</p>
                        <div className="social-icons">
                            <Link to="#" className='a'><FontAwesomeIcon icon={faBox} className="icon facebook" /></Link>
                            <Link to="#" className='a'><FontAwesomeIcon icon={faMessage} className="icon instagram" /></Link>
                            <Link to="#" className='a'><FontAwesomeIcon icon={faPieChart} className="icon pinterest" /></Link>
                            <Link to="#" className='a'><FontAwesomeIcon icon={faUser} className="icon youtube" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword