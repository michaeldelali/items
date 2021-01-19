import React,{useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import {Context } from "../provider/AuthProvider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [currentUser]  = useContext(Context)
 
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/signin'} />
        )
      }
    />
  );
};

export default PrivateRoute