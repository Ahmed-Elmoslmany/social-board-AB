import React from 'react'
import { useAuth } from '../context/AuthContext';

function Logout() {
    
    const {logout} = useAuth();
    function handleLogout (e){
        e.preventDefault();
        logout();
    }
  return (
    <div>Logout
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout