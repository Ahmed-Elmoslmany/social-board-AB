import React from 'react'

function Landing() {

    const {islLogged} = useAuth()

    if(!islLogged){
        return <Redirect to="/login" />
    }
  return (
    <div>Landing</div>
  )
}

export default Landing