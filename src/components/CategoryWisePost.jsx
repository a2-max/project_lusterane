import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import FeatureImage from '../partials/ClientsUploadedImage/pic1.png';

const Post = (props) => {
    return(
        <>
          <div className={`${props.Class} posts`}>
              <div className='single-post'>
              <div className='overlay'></div>
                  <div className='featureImage'>
                  <img src={props.Image} alt='Feature Image' className='image' />
                  </div>
                  <Link to={props.Link} className='postTitle'>{props.Title}</Link>
              </div>
          </div>
        </>
    );
}

function CategoryWisePost() {
  return (
      <>
      <Post 
          Image={FeatureImage}
          Link="#"
          Title="Build your own Portfolio Website using HTML, CSS and JavaScript"
          Class=" firstPostGrid"
      />
      <Post 
          
          Image={FeatureImage}
          Link="#"
          Title="Complete Responsive Educational Website in HTML, CSS & Javascript"
      />
      <Post 
          Image={FeatureImage}
          Link="#"
          Title="User Registration Form in PHP and MYSQL"
          />
      <Post 
          Image={FeatureImage}
          Link="#"
          Title="Radio Music Player | Custom Music Player in Javascript"       
          />
      </>
  )
}

export default CategoryWisePost