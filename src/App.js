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
import { format } from 'date-fns'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Blog Post",
      datetime: "April 18, 2022 07:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi! Ea, suscipit id soluta voluptatibus facilis sapiente nesciunt nostrum quia dolorum porro illum? Esse porro nostrum eligendi! Facere omnis fuga dicta! Cum sed, aliquid ipsa qui nisi natus similique aliquam porro velit mollitia pariatur. Placeat dicta sit beatae rerum nesciunt"
    },
    {
      id: 2,
      title: "Second Blog Post",
      datetime: "April 17, 2022 07:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi! Ea, suscipit id soluta voluptatibus facilis sapiente nesciunt nostrum quia dolorum porro illum? Esse porro nostrum eligendi! Facere omnis fuga dicta! Cum sed, aliquid ipsa qui nisi natus similique aliquam porro velit mollitia pariatur. Placeat dicta sit beatae rerum nesciunt"
    },
    {
      id: 3,
      title: "Third Blog Post",
      datetime: "April 16, 2022 07:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi! Ea, suscipit id soluta voluptatibus facilis sapiente nesciunt nostrum quia dolorum porro illum? Esse porro nostrum eligendi! Facere omnis fuga dicta! Cum sed, aliquid ipsa qui nisi natus similique aliquam porro velit mollitia pariatur. Placeat dicta sit beatae rerum nesciunt"
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      datetime: "April 15, 2022 07:00:00 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, sequi! Ea, suscipit id soluta voluptatibus facilis sapiente nesciunt nostrum quia dolorum porro illum? Esse porro nostrum eligendi! Facere omnis fuga dicta! Cum sed, aliquid ipsa qui nisi natus similique aliquam porro velit mollitia pariatur. Placeat dicta sit beatae rerum nesciunt"
    }
  ])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const history= 'useHistory'
  

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id  !== id)
    setPosts(postsList)
    history.push('/')
  }

  useEffect(() => {
    const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase()) || ((post.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1 
    const datetime = format(new Date(), 'MMMM dd, yyyy pp')
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    history.push('/')
  }

  return (
    <div className="App">
      <Header title="React Blog"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path="/" element={<Home posts={searchResults} />}/>
          <Route path="about" element={<About/>} />
          <Route path="post" element={<NewPost 
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody} 
            />} />
          <Route path="post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="*" element={<Missing />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
