import React from 'react';
import AuthorImage from '../../partials/authorImages/rijan.jpg';
import '../../partials/css/authorCard.css';

function AuthorCard() {
  return (
      <>
          <div className='author-card-wrapper'>
              <img src={AuthorImage} alt='profile-pic' className='profile-pic' />
              <div className='description'>
                  <h3 className='author-name'>Rijan Neupane</h3>
                  <div className='author-meta-data'>
                      <p className='rank'>Platinum</p>
                      <p className='post-count'>300 Posts</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default AuthorCard