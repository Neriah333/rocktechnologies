import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <div><h1>Hello World</h1></div>
      
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - 1)}>
          {count}
        </button>
      </div>
    </>

  );

  
}

export default App
