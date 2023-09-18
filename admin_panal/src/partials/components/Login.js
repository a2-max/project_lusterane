import React, {useState} from 'react';
import "../css/login.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    // faFacebook,
    // faInstagram,
    // faPinterest,
    // faYoutube
    faLock,
    faBox,
    faUser,
    faMessage,
    faPieChart,
} from '@fortawesome/free-solid-svg-icons';
// import catDefault from '../images/catdefault.png';
// import catPaw from '../images/catpaw.png';
// import catEmail from '../images/catemail.png';
// import catPassword from '../images/catpassword.png';

function Login() {
    // Storing Form data in state
    // for now we will store it in state and later we will push it to backend
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    let name, value;

    // Main function for handling all Inputs
    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    } //handleInputs function ends here

    // sending form data to backend stored in setNewPost state
    const loginAuth = async (e) => {
        try {
            e.preventDefault();
            const { email, password } = user;

            const res = await fetch("/login-auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                //converting JSON data to string
                body: JSON.stringify({
                    email, password
                })
            });

            const data = await res.json();
            if (!data) {
                window.alert("User Verified");
                console.log("User Verified");
            } else {
                window.alert("Failed to verify user");
                console.log("Failed to verify user");
            }
        } catch (err) {
            console.log(`Something Went Wrong`);
            console.log(err.message);
        }
    }

    return (
        <>
            <div className='login-wrapper'>
                <div className='login-insider'>
                    <div className="card login-card">
                        {/* <div className={blur ? 'catarea blur-catarea' : 'catarea'}>
                            <img src={catPaw} alt="cat paw" className={click ? 'paw paw-active' : 'paw'} />
                            <img src={catDefault} alt="cat" className={click ? 'default default-active' : 'default-active'} />
                            <img src={catEmail} alt="cat" className={email ? 'email email-active' : 'email'} />
                            <img src={catPassword} alt="cat" className={click ? 'password password-active' : 'password-active'} />
                        </div> */}
                        <div className="details">
                            <div className="overlayn"></div>
                            <h4 className="title">ONE ACCOUNT FOR ALL Lusterane SERVICES</h4>
                            <p className="tagline">Want to be our content writer?</p>
                            <Link to="/signup" className='create-account-btn'><button>Create New Account</button></Link>
                        </div>
                        <div className="formarea">
                            <div className="content">
                                <h4 className="title">sign in</h4>
                                <form method='POST'>
                                    <div className="inputarea">
                                        <input type="email" placeholder="Email Address" id="email" name='email'
                                onChange={handleInputs}
                                value={user.email} />
                                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    </div>
                                    <div className="inputarea">
                                        <input type="password" placeholder="Password" id="password" name='password'
                                onChange={handleInputs}
                                value={user.password} />
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    </div>
                                    <Link to="/reset-password">forgot password</Link>
                                    <button type="submit" onClick={loginAuth}>Login</button>
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
export default Login