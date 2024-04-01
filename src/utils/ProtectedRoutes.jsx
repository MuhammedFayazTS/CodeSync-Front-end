import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { protectedAPI } from "services/allAPIs";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const credentials = { withCredentials: true };
        const response = await protectedAPI(credentials);     
        if (response.status !== 200) {
          navigate('/sign-in');
        }   
      } catch (error) {
        console.error(error);
      }
    };
    authenticateUser();
  }, []);

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
