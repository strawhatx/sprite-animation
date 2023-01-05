import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [context, setContext] = useState(null);
  const [img, setImg] = useState(null);
  const [width, setWidth] = useState("600px");
  const [height, setHeight] = useState("600px");

  const ref = useRef(null);

  const getPlayer = () => {
    const img = new Image();
    img.src = "images/shadow_dog.png";
    setImg(img);
  };

  const setDimensions = () => {
    setWidth((ref.current.width = 600));
    setHeight((ref.current.height = 600));
  };

  useEffect(() => {
    setContext(ref.current.getContext("2d"));

    setDimensions();
    getPlayer();
  }, [ref]);

  return (
    <div className="app">
      <canvas className="canvas" ref={ref}></canvas>
    </div>
  );
};

export default App;
