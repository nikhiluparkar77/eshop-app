import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, userAuth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => 
      userAuth.isAuthenticated === false ? (
        <Redirect to="/login" />
      ) : (
        <Component customprops={props} {...props} />
      )}
      />
  )
}

PrivateRoute.propTypes = {
  userAuth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  userAuth:state.userAuth
})

export default connect(mapStateToProps)(PrivateRoute);
