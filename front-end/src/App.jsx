import { useState } from "react";
import "./App.css";

// Import your routing setup
import Routing from "./Router";

// Use BrowserRouter from react-router-dom
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
   
      <Routing />
    
  );
}

export default App;
