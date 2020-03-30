import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header>Contator: {counter}</Header>
      <button onClick={increment}>Press</button>
    </div>
  );
}

export default App;
