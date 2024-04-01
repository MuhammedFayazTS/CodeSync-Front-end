import { BASE_URL } from "./base_url";
import { commonAPI } from "./commonAPI";

// login api call
export const signInAPI = async (credentials) => {
  return await commonAPI("get", `${BASE_URL}/api/user`, "","",credentials);
};
