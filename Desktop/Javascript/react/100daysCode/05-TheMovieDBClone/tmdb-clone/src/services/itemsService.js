import http from "./httpService";

const key = process.env.REACT_APP_KEY;

const getEndpoint = (path1, path2, path3) => {
  if (path3)
    return `${path1}/${path2}/rating?api_key=${key}&session_id=${path3}`;
  return `${path1}/${path2}?api_key=${key}&language=en-US&page=1`;
};

export const getItems = async (type, option) => {
  const endpoint = getEndpoint(type, option);
  const { data } = await http.get(endpoint);
  return data.results;
};

export const rateMovie = async (type, movieId, sessionId, value) => {
  const endpoint = getEndpoint(type, movieId, sessionId);
  console.log("endpoint", endpoint);
  console.log("value", value);
  await http.post(endpoint, { value });
};
