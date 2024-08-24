import React, { useEffect, useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);


  useEffect(()=>{
    console.log(`counter ${count}`);
  },[count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
