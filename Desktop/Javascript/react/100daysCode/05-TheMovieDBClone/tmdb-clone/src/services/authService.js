import http from "./httpService";

const key = process.env.REACT_APP_KEY;

const getEndpoint = (path1 = "token", path2 = "new") => {
  return `authentication/${path1}/${path2}?api_key=${key}`;
};

export const getToken = async () => {
  const endpoint = getEndpoint();
  const { data } = await http.get(endpoint);
  return data.request_token;
};

export const isUserValid = async (request_token, username, password) => {
  const endpoint = getEndpoint("token", "validate_with_login");

  const body = { username, password, request_token };
  try {
    const { data } = await http.post(endpoint, body);
    return data.success;
  } catch (ex) {
    console.log("ex", ex.response.status);
    if (ex.response.status >= 401 || ex.response.status <= 499) return false;
  }
};

export const getSessionId = async request_token => {
  const endpoint = getEndpoint("session");

  const body = { request_token };

  const { data } = await http.post(endpoint, body);
  return data.session_id;
};
