import React from 'react';
import Body from './Body';
import FeaturedPosts from './FeaturedPosts';
import { Helmet } from "react-helmet";


const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/* <title>Home</title> */}
        <meta title='author' description="Rijan Neupane" />
      </Helmet>

      <FeaturedPosts />
      <Body />
    </>
  )
}

export default Home