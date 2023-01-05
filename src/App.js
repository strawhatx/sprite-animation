import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const ref = useRef(null);

  return (
    <div className="app">
      <div className="canvas" ref={ref}></div>
    </div>
  );
};

export default App;
