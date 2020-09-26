import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const useGif = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {};

  return { gif, fetchGif };
};

export default useGif;
