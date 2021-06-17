import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminPrivateRoute = ({component: Component, adminAuth, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => 
      adminAuth.isAuthenticated === false ? (
        <Redirect to="/login" />
      ) : (
        <Component customprops={props} {...props} />
      )}
      />
  )
}

AdminPrivateRoute.propTypes = {
  adminAuth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  adminAuth:state.adminAuth
})

export default connect(mapStateToProps)(AdminPrivateRoute);
