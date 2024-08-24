import React from 'react'

const User = ({items}) => {
  return (
    <>
    <div>Users Items</div>

      <ul>


       {
        items.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))
       }
      </ul>

    
      </>



  )
}

export default User