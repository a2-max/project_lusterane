import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import PopularPost from './widgets/PopularPost';
import '../partials/css/widget.css';
import '../partials/css/sidebar.css';
import FollowLusterane from './widgets/FollowLusterane';

function Sidebar() {
  return (
      <>
      <div className='sidebar'>
          <PopularPost />
          <FollowLusterane />
      </div>
      </>
  )
}

export default Sidebar