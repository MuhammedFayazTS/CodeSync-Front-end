import { commonAPI } from "./commonAPI";

const API_VERSION = import.meta.env.VITE_API_VERSION
const BASE_URL = (import.meta.env.VITE_BACKEND_URL)+API_VERSION

// signIn api call
export const signInLocalAPI = async (userDetails,credentials) => {
  return await commonAPI("post", `${BASE_URL}/auth/login`,userDetails,"",credentials);
};

// signIn api call
export const signInAPI = async (credentials) => {
  return await commonAPI("get", `${BASE_URL}/me`, "","",credentials);
};

