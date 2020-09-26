import React, { useState } from "react";
import useTag from "../Hooks/useTag";

const Random = () => {
  const [tag, setTag] = useState("dog");
  const { tagGif, fetchTagGif } = useTag(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="500" src={tagGif} alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={fetchTagGif(tag)}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
