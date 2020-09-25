import React, { useState, useEffect } from "react";
import axios from "axios";
import useGif from "../Hooks/useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};
export default Random;
