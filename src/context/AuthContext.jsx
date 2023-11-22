import { createContext, useContext, useReducer } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile,} from "firebase/auth";
import {  addDoc , setDoc, doc, collection, getFirestore, serverTimestamp} from 'firebase/firestore';
import { firebaseApp } from "../../firebase";

const AuthContext = createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Cannot use useAuth outside AuthProvider");
  }
  return context;
}

const initialState = {
  isLogged: false,
  user: null,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        isLoading: false,
      };
      case "LOGIN":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        isLoading: false,
      };
      case "CHECKLOGGED":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        user: null,
        isLoading: false,
      };
      case "ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
function AuthProvider({ children }) {
  const [{ user, isLogged, isLoading }, dispatch] = useReducer(reducer, initialState);

  async function handleSignUp(email, password, username) {
    dispatch({ type: "ISLOADING" });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName: username });
      // New feature may delete or modify
      // New feature to add user to users collection once signUp
      const user = userCredential.user;
      const userObject = user.toJSON();
      console.log(userObject);
      const currentUserInfo = {
        displayName: userObject.displayName,
        email: userObject.email,
        gender: "male",
        timestamp: serverTimestamp(),
        photoURL: "fadfad",
        posts: [],
        uid: userObject.uid,
      }
      await addUserToCollection(currentUserInfo, userObject.uid)
      
      dispatch({ type: "REGISTER", payload: currentUserInfo });

      


      console.log(isLogged);
      console.log("Registered user:", user);
    } catch (error) {
      console.error("Error signing up:", error.message);
      console.log("grb wa7ed tany ya Negm ;D");
    }
  }

  async  function handleSignIn(email, password) {
    dispatch({ type: "ISLOADING" });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch  ({ type: "LOGIN", payload: { email, password } });
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in", error);
      console.log("Error signing in", error);
    }
  };

  function checkLogged(user) {
    
    if(user) dispatch({ type: "CHECKLOGGED", payload:  user  });
    else dispatch({ type: "LOGOUT" });

               
    console.log(user.uid);
  }
 async function logout() {
    
   dispatch({ type: "ISLOADING" });
      try {
        await signOut(auth);
        dispatch({ type: "LOGOUT" });
        console.log("User signed out successfully");
      } catch (error) {
        console.error("Error signing out", error);
      }
    
  }

  // New feature to add user to users collection once signUp
  async function addUserToCollection(user, userId) {
    try {
      const db = getFirestore(firebaseApp);

      const usersRef = collection(db, 'users');
      const userDocRef = doc(usersRef, userId);
     await setDoc(userDocRef, user, { merge: true });
    // await addDoc(usersRef , user);
    console.log("user added to collection");
    } catch (error) {
      console.log("Error adding user to collection", error);
    }
  }
  return (
    <AuthContext.Provider value={{ user, isLogged,checkLogged, handleSignUp,handleSignIn, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
