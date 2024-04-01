import { ServerVariables } from "utils/server-variables";
import { commonAPI } from "./commonAPI";

const API_VERSION = import.meta.env.VITE_API_VERSION
const BASE_URL = (import.meta.env.VITE_BACKEND_URL)+API_VERSION

// signIn api call
export const signInLocalAPI = async (userDetails,credentials) => {
  return await commonAPI("post",BASE_URL + ServerVariables.LocalAuthLogin,userDetails,"",credentials);
};

// signUp api call
export const signUpLocalAPI = async (userDetails) => {
  return await commonAPI("post", BASE_URL + ServerVariables.LocalAuthRegister,userDetails);
};

// signIn api call
export const signInAPI = async (credentials) => {
  return await commonAPI("get", `${BASE_URL}/me`, "","",credentials);
};

