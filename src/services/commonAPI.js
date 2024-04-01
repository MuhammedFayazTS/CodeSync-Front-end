import axios from "axios";

export const commonAPI = async (
  httpMethod,
  url,
  requestBody,
  requestHeaders,
  withCredentials 
) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const requestConfig = {
    method: httpMethod,
    url,
    data: requestBody,
    headers: requestHeaders ? requestHeaders : defaultHeaders,
    withCredentials: withCredentials || false,  
  };

  try {
    // Sending request using Axios and returning the result
    const result = await axios(requestConfig);
    return result;
  } catch (error) {
    return error;
  }
};