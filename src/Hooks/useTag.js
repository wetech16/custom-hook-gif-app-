import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function useTag(tag) {
  const [tagGif, settagGif] = useState("");

  const fetchTagGif = async (tag) => {};

  return { tagGif, fetchTagGif };
}

export default useTag;
