import http from "./httpService";

const key = process.env.REACT_APP_KEY;

const getEndpoint = (path1, path2) => {
  if (!path2) return `authentication/${path1}?api_key=${key}`;
  return `authentication/${path1}/${path2}?api_key=${key}`;
};

const getToken = async () => {
  const endpoint = getEndpoint("token", "new");
  const { data } = await http.get(endpoint);
  return data.request_token;
};

const isUserValid = async (request_token, username, password) => {
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

const requestSessionId = async request_token => {
  const endpoint = getEndpoint("session", "new");

  const body = { request_token };
  console.log("body", body);
  const { data } = await http.post(endpoint, body);
  return data.session_id;
};

const setLocalStorage = sessionId => {
  const newLocalStorage = {
    username: process.env.REACT_APP_TESTING_USER,
    sessionId
  };
  localStorage.setItem("TMDB_clone", JSON.stringify(newLocalStorage));
};

const deleteSessionId = async session_id => {
  let endpoint = getEndpoint("session");
  endpoint = endpoint + `&session_id=${session_id}`; // THIS SHOULD BE DONE OUTSIDE
  try {
    await http.delete(endpoint);
  } catch (ex) {
    console.log("ex", ex.response);
  }
};

export const login = async () => {
  console.log("into login");
  const token = await getToken();

  const validUser = await isUserValid(
    token,
    process.env.REACT_APP_TESTING_USER,
    process.env.REACT_APP_TESTING_PASS
  );

  if (validUser) {
    console.log("into valid user");
    const sessionId = await requestSessionId(token);
    setLocalStorage(sessionId);
  } else {
    console.log("Invalid username or password.");
    return;
  }
};

export const logout = () => {
  const sessionId = getSessionId();
  deleteSessionId(sessionId);
  localStorage.removeItem("TMDB_clone");
};

export const getSessionId = () => {
  const { sessionId } = JSON.parse(localStorage.getItem("TMDB_clone") || "{}");
  return sessionId;
};

export const getUsername = () => {
  const { username } = JSON.parse(localStorage.getItem("TMDB_clone") || "{}");
  return username;
};
