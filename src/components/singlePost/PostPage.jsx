import React from 'react';
import Sidebar from '../Sidebar';
import '../../partials/css/bodyPosts.css';
import '../../partials/css/singlePost.css';
import MainPost from './MainPost';
import SuggestedPost from './SuggestedPost';
import Posts from '../Posts';
import { Helmet } from "react-helmet";

function PostPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Post Page</title>
        <meta title='author' description="Rijan Neupane" />
        <meta content="I'm Rijan and I'm a front-end web developer from Nepal. My skills are React, Javascript, PHP, MYSQL and many more." name='description' />
        <meta name="keywords" content="Rijan Neupane, Rijan, web developer, rijanneupane, ekalpremi, neupanerijan" />
      </Helmet>

      <div className='single-post-body-wrapper'>
        <div className='content-area'>
          <MainPost />
        </div>
        <SuggestedPost />
        <Sidebar />
      </div>
    </>
  )
}

export default PostPage