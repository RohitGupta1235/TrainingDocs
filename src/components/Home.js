import React from 'react'

const Home = ({user}) => {
  return (
    <>
    <div>Welcome Home {user.name}</div>
{
    user.name && <h1>Users Exits</h1>
}
    <div>he is having skills in the {user.skill}</div>
    </>
  )
}

export default Home