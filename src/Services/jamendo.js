const CLIENT_ID = "1ffa8c84";
const BASE_URL = "https://api.jamendo.com/v3.0";

export const getTracksByMood = async (mood) => {
  const res = await fetch(
    `${BASE_URL}/tracks?client_id=${CLIENT_ID}&format=json&tags=${mood}&limit=15`
  );

  const data = await res.json();
  return data.results;
};
