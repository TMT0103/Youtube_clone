import axios from "axios";

export const BASE_URL = "https://www.googleapis.com/youtube/v3";

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchFromApi = async (url) => {
  if (!apiKey) {
    throw new Error(
      "Missing YouTube API key. Set REACT_APP_YOUTUBE_API_KEY in your .env and restart the dev server."
    );
  }

  const separator = url.includes("?") ? "&" : "?";
  const { data } = await axios.get(`${BASE_URL}/${url}${separator}key=${apiKey}`, {
    params: { maxResults: 50 },
  });

  return data;
};
