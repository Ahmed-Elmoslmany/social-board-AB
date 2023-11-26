import React from 'react'

import SideBarOption from './SideBarOption'

function SideBar() {
  return (
    <div className='dark:bg-slate-800 w-1/4 h-screen fixed top-0 flex flex-col justify-start items-center gap-12'>
    <div className='mt-16' >
      
      <SideBarOption to="/app" text="Main Home" />
      <SideBarOption to="/profile" text="My Profile" />
      
    </div>
    
  </div>
  )
}

export default SideBar