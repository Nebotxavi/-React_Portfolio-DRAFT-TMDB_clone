import http from "./httpService";

const key = process.env.REACT_APP_KEY;

const getEndpoint = (type, option) => {
  return `${type}/${option}?api_key=${key}&language=en-US&page=1`;
};

export const getItems = async (type, option) => {
  const endpoint = getEndpoint(type, option);
  const { data } = await http.get(endpoint);
  return data.results;
};
