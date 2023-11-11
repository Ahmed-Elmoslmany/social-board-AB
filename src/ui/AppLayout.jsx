import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../../firebase";
function AppLayout() {
  const { isLogged, checkLogged, isLoading } = useAuth();

  console.log(isLogged);

  const navigate = useNavigate();

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      checkLogged(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isLogged) {
      navigate("/app");
    }else{
      navigate("/register");
    }
  }, [isLogged, navigate]);
  
  if(isLoading) {
    console.log("Loading...");
    return <div>Loading...</div>
  }
  return (
    <>
    
    {isLogged && <div>AppLayout</div>}  
      <main>
        <Outlet />
      </main>
    </>
  );
}





export default AppLayout;
