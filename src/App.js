import React, { useState } from 'react';
// import CreatePost from './Components/CreatePost/CreatePostForm';
import PostForm from './Components/PostForm/Post';
import PostList from './Components/PostList/PostList';


function App() {

  const [posts, setPosts] = useState([{name: 'Leo Messi', post: 'I am the GOAT!'}])
  return (
    <><div>
      {/* <CreatePost /> */}
      <PostForm />
    </div><div>
        <PostList pastPosts={posts} />
      </div></>
  );
}

export default App;
