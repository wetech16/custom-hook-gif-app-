import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function useTag(tag) {
  const [tagGif, settagGif] = useState("");

  const fetchTagGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    settagGif(imageSrc);
  };
  useEffect(() => {
    fetchTagGif(tag);
  }, [tag]);

  return { tagGif, fetchTagGif };
}

export default useTag;
