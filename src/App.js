import Header from './Header'
import Footer from './Footer';
import Missing from './Missing';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import { Route, Routes, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  return (
    <div className="App">
      <Header title="React Blog"/>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="about" element={<About/>} />
          <Route path="post" element={<NewPost/>} />
          <Route path="post/:id" element={<PostPage/>} />
          <Route path="*" element={<Missing />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
