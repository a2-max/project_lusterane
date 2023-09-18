import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import FeatureImage from '../partials/ClientsUploadedImage/pic1.png';
import '../partials/css/randomPost.css';


const Rand_Post = (props) => {

    // Fetching Data from API
    const [mydata, setMyData] = useState([]);
    const getData = async () => {
        const response = await fetch("http://localhost:8000/posts");
        setMyData(await response.json());
    }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            {
                mydata.map((curData) => {
                    return (
                        <div className='rand-single-post'>
                            <div className='rand-overlay'></div>
                            <div className='rand-featureImage'>
                                <img src={curData.img} alt='Feature Image' className='rand-image' />
                            </div>
                            <Link to={"posts/"+curData.slug} className='rand-postTitle'>{curData.title}</Link>
                        </div>
                    )
                })
            }
        </>
    );
}

const PostTemplate = (props) => {
    return (
        <>
            <div className='post-wrapper'>
                <div className='header'>
                    <span className='categoryName'>{props.Category}</span>
                    <Link to='#' className='showMoreBtn'>Show More</Link>
                </div>
                <div className='divider'></div>

                {/* Posts List */}
                <div className='rand-posts'>
                    <Rand_Post />
                </div>
            </div>
        </>
    )
}

function RandomPost() {
    return (
        <>
            <PostTemplate
                Category="Some Posts"
            />
        </>
    )
}

export default RandomPost