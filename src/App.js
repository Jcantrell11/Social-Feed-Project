import React, { useState } from 'react';
// import CreatePost from './Components/CreatePost/CreatePostForm';
import PostForm from './Components/PostForm/Post';
import PostList from './Components/PostList/PostList';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [posts, setPosts] = useState([{name: 'Leo Messi', post: 'I am the GOAT!'}])
  
  function addNewPost(post){
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }
  
  
  return (
    // <><div>
    //   <NavBar />
    // </div><><div>
    //   <PostForm postNewPost={addNewPost} />
    // </div><div>
    //       <PostList pastPosts={posts} />
    //     </div></></>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='navbar'>
            <NavBar />
          </div>
          <div className='border-box'>
            <PostForm postNewPost={addNewPost} />
          </div>
          <div className='border-box'>
            <PostList pastPosts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
