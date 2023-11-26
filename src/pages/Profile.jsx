import React from 'react'

function Profile() {
  return (
    <div className="flex items-center space-x-4  justify-center  ">
      <img
        src="https://avatars.githubusercontent.com/u/25126281?v=4"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">Elmoslmany</h2>
        <p className="text-gray-500">ahmed@gmail.com</p>
      </div>
    </div>
  )
}

export default Profile