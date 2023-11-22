import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(true);
  const { handleSignUp, handleSignIn } = useAuth();

  async function handleClick(e) {
    e.preventDefault();
    if(newUser) handleSignUp(email, password, username);
    else handleSignIn(email, password);    

  }

// function handleLogin(e) {
//   e.preventDefault();
//   handleSignIn(email, password);    
// }

  // @variants {condition} {class}:{property}-{value}
  return (
    <div className="px-5 py-5 dark:bg-slate-800 transition-all h-96">
       <input onClick={()=> setNewUser(!newUser) }type="checkbox" className="transition-all" placeholder="username" />
      <h1>{newUser ? "Register" : "Login"}</h1>
      <div className="flex-col	gap-10px px-4 py-5 ">
        <div className=" flex flex-col  px-4 py-2">
          <label htmlFor="username" className="inline-flex">
            Email
          </label>
          <input
            type="text"
            value={email}
            id="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {newUser && <div className=" flex flex-col  px-4 py-1">
          <label htmlFor="UserName" className="inline-flex">
            UserName
          </label>
          <input
          className="transition-all duration-500 ease-in-out"
            type="UserName"
            value={username}
            id="UserName"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>}

        <div className=" flex flex-col  px-4 py-1">
          <label htmlFor="password" className="inline-flex">
            Password
          </label>
          <input
            type="password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-center px-4 py-3 ">
        <button onClick={handleClick}>{newUser ? "Register" : "Login"}</button>
        {/* <button onClick={handleLogin}>Login</button> */}
      </div>
    </div>
  );
}

export default Register;
