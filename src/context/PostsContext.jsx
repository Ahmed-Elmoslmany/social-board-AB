import React, { createContext, useContext, useReducer } from "react";
import { getFirestore, getDocs, updateDoc, getDoc ,doc, setDoc, addDoc, serverTimestamp , collection} from 'firebase/firestore';
import { firebaseApp } from "../../firebase";

const PostsContext = createContext();

const usePosts = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("usePosts must be used within a PostsProvidor");
  }
  return context;
};

const initialState = {
  posts: [],
  user: {},
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        isLoading: false,
      };
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
function PostsProvidor({ children }) {
  const [{ posts, user, isLoading }, dispatch] = useReducer(reducer, initialState);

  async function addPost(title, userId, author = "ahmed") {
    try {
      dispatch({type: "IS_LOADING"})
      const db = getFirestore(firebaseApp);
      const postsRef = collection(db, 'posts');
      const usersRef = collection(db, 'users');

      const newPost = {
        author: "ahmed",
        title: title,
        subject: 'test',
        timestamp: serverTimestamp(),
        userId: userId, // Add the user ID to the post data
      };
      console.log(userId);

      // const newPostRef = await addDoc(postsRef , newPost);
      // const userDocRef = doc(usersRef, userId);
      // await setDoc(userDocRef, { posts: [newPostRef] }, { merge: true });

      // dispatch({ type: "ADD_POST", payload: { title, author } });



      const newPostRef = await addDoc(postsRef, newPost);

      const userDocRef = doc(usersRef, userId); 
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const updatedPosts = [...(userData.posts || []), newPostRef];

        await updateDoc(userDocRef, { posts: updatedPosts });

      console.log('Post added successfully!');
      // You can perform actions after the post is added
    } else {
      
      const userDocRef = doc(usersRef, userId);
      await setDoc(userDocRef, { posts: [newPostRef] }, { merge: true });
      console.error('User document does not exist');
    }
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  }

  async function getPosts() {
    try {
      const db = getFirestore(firebaseApp);
      const postsRef = collection(db, 'posts');
      const snapshot = await getDocs(postsRef);

      const postsData = [];
      snapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() });
      });

      dispatch({ type: "GET_POSTS", payload: postsData });
      console.log(postsData);
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        addPost,
        getPosts,
        isLoading
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export { PostsProvidor, usePosts };
