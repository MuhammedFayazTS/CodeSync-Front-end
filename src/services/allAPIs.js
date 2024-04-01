import { ServerVariables } from "utils/server-variables";
import { commonAPI } from "./commonAPI";

// Define base URL and API version
const API_VERSION = import.meta.env.VITE_API_VERSION;
const BASE_URL = import.meta.env.VITE_BACKEND_URL + API_VERSION;

// API calls

// Sign in API call
export const signInLocalAPI = async (userDetails, credentials) => {
  return await commonAPI("post", BASE_URL + ServerVariables.LocalAuthLogin, userDetails, "", credentials);
};

// Sign up API call
export const signUpLocalAPI = async (userDetails) => {
  return await commonAPI("post", BASE_URL + ServerVariables.LocalAuthRegister, userDetails);
};

// Protected route API call
export const protectedAPI = async (credentials) => {
  return await commonAPI("get", BASE_URL + ServerVariables.PROTECTED, "", "", credentials);
};
