import { useState } from "react";
import "./App.css";

// Import routing setup
import Routing from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
