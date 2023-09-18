import React from 'react';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";
import PostPage from './components/singlePost/PostPage';
import SearchResult from './components/searchResult/SearchResult';
import Author from './components/authorWisePosts/Author';

function App() {

  return (
    <>
      <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<PostPage />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/author' element={<Author />} />
      </Routes>
        {/* <Home /> */}
        {/* <PostPage /> */}
      </div>
    </>
  );
}

export default App;
