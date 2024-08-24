import React from 'react'
import Home from './components/Home'
import User from './components/User'
import Counter from './components/Counter'

const App = () => {
  const user={
    name:"Rohit Gupta",
    age:20,
    skill:"itc"
  }

  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];


  return (
    <>
    
    <div>
      

      <h1>Rohit Gupta !!</h1>
    </div>


    <Home user={user}/>
    <br/>
    <User items={items}/>

<Counter/>
    
    </>
  )
}

export default App