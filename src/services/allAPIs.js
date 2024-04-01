import { commonAPI } from "./commonAPI";

const BASE_URL = import.meta.env.VITE_BACKEND_URL

// login api call
export const signInAPI = async (credentials) => {
  return await commonAPI("get", `${BASE_URL}/api/user`, "","",credentials);
};
