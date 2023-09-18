import React, { useState, useMemo } from 'react';
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
    faEnvelope,
    faInfoCircle,
    faLock,
    faImage,
    // faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const [value, setValue] = useState('Select Country')
    const options = useMemo(() => countryList().getData(), []);
    const changeHandler = value => {
        setValue(value)
    }

    // Storing Form data in state
    // for now we will store it in state and later we will push it to backend
    const [newUser, setNewUser] = useState({ name: "", bio: "", email: "", password: "", foo: "" });
    const [file, setFile] = useState('');
    let ename, val, profilePic;

    const handleInputs = (e) => {
        ename = e.target.name;
        val = e.target.value;
        setNewUser({ ...newUser, [ename]: val });
        profilePic = e.target.files;
        setFile(profilePic);
        console.log(file);

    } //handleInputs ends here


    const saveUser = async (e) => {
        try {
            e.preventDefault();
            //We have set country's value directly from 'value' hook not newUser hook
            const { name, country = value.label, bio, email, password} = newUser;

            const result = await fetch("/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                //converting JSON data to string
                body: JSON.stringify({
                    name, country, bio, email, password
                })
            });

            const data = await result.json();
            if (!data) {
                toast.error('Failed to create user', {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.success('User Created Successfully', {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } catch (err) {
            console.log(err);
            toast.error('Something Went Wrong', {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <div className='login-wrapper'>
                <div className='login-insider'>
                    <div className="card login-card">
                        {/* <div className="catarea">
                    <img src="images/seagm/catpaw.png" alt="paw" className="paw">
                    <img src="images/seagm/catdefault.png" alt="default" className="default">
                    <img src="images/seagm/catemail.png" alt="email" className="email">
                    <img src="images/seagm/catpassword.png" alt="pass" className="password">
                </div> */}
                        <div className="details">
                            <div className="overlayn"></div>
                            <h4 className="title">ONE ACCOUNT FOR ALL Lusterane SERVICES</h4>
                            <p className="tagline">Already have an account?</p>
                            <Link to="/login" className='create-account-btn'><button>Login Here</button></Link>
                        </div>
                        <div className="formarea">
                            <div className="content">
                                <form method='POST'>
                                    <div className="inputarea">
                                        <input type="text" placeholder="Full Name" id="name" name='name'
                                            onChange={handleInputs}
                                            value={newUser.name}
                                        />
                                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                                    </div>
                                    <span className='label'>Select Country</span>
                                    <div className="inputarea select-inptArea">
                                        <Select options={options} value={value} name="country" className="select-country"
                                            onChange={changeHandler}
                                        />
                                        {/* <FontAwesomeIcon icon={faGlobeAmericas} className="input-icon" /> */}
                                    </div>
                                    <div className="inputarea">
                                        <input type="text" placeholder="Short Bio" id="bio" name='bio'
                                            onChange={handleInputs}
                                            value={newUser.bio} />
                                        <FontAwesomeIcon icon={faInfoCircle} className="input-icon" />
                                    </div>
                                    <div className="inputarea">
                                        <input type="email" placeholder="Email Address" id="email" name='email'
                                            onChange={handleInputs}
                                            value={newUser.email} />
                                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                    </div>
                                    <div className="inputarea">
                                        <input type="password" placeholder="Password" id="password" name='password'
                                            onChange={handleInputs}
                                            value={newUser.password} />
                                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                                    </div>
                                    <span className='label'>Select Profile Picture</span>
                                    <div className="inputarea">
                                        <input name="foo" type="file"
                                            onChange={handleInputs}
                                            value={newUser.foo} />
                                        <FontAwesomeIcon icon={faImage} className="input-icon" />
                                    </div>
                                    <button type="submit" onClick={saveUser}>Create Account</button>
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
            <ToastContainer />
        </>
    )
}

export default Signup