import React, { useEffect, useState } from "react";
import Logout from "../ui/Logout";
import CreatePost from "../features/posts/CreatePost";
import Button from "../ui/Button";
import { usePosts } from "../context/PostsContext";

function MainApp() {
  const [createPost, setCreatePost] = useState(false);
  const {getPosts, posts} = usePosts()
  const handlePostModal = async () => {
    setCreatePost(!createPost);
    
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      MainApp.
      {posts && posts.map((post, index) => <p> key={index} { post.title} </p>)}
      <Button
        text="Create Post"
        type="text"
        onClick={handlePostModal}
        className="flex"
      />
      {createPost && <CreatePost setCreatePost={setCreatePost}/>}
      <Logout />
    </div>
  );
}

export default MainApp;
