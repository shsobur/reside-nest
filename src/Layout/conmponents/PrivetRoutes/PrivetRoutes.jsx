import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  if(loading) {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <div className="loading loading-dots loading-lg"></div>
        <p>Loading Please wait...</p>
      </div>
    )
  }

  if(user) {
    return children;
  }

  return <Navigate to="/singin"></Navigate>
};

PrivetRoutes.propTypes = {
  children: PropTypes.object
}

export default PrivetRoutes;