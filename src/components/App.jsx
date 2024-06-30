import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h2>Counter</h2>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
