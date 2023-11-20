import React, { useState } from "react";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { usePosts } from "../../context/PostsContext";
import { useAuth } from "../../context/AuthContext";

function CreatePost({setCreatePost}) {
  const [postTitle, setPostTitle] = useState("");
  const {user} = useAuth()
  const {addPost, getPosts} = usePosts()
  const handleCreatePost = () => {
    console.log(user.uid);
    addPost(postTitle, user.uid)

    getPosts()
    setCreatePost(false)
    
    console.log("Post created");
  }
  return (
    <div className="dark:bg-slate-800 px-4 py-5 flex justify-center">
      <InputField
        type="text"
        value={postTitle}
        placeholder="Title"
        onChange={(e) => setPostTitle(e.target.value)}
      />
      <Button text="Create Post" onClick={handleCreatePost} />
    </div>
  );
}

export default CreatePost;
