import React, { useState } from 'react'

function AuthPage({register}) {
  
    function loginHandler(e) {
      e.preventDefault();
      console.log("login");
    }
    return (
      <div className="px-5 py-5 bg-blue-800">
        <h1>{register ? "Register" : "Login"}</h1>
        <div className="flex-col	gap-10px px-4 py-5 ">
          <div className=" px-4 py-5">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </div>
  
    
      </div>
    );
  
}

export default AuthPage