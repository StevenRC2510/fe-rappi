import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const LoginRequiredRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = () => ({
  isAuthenticated: true,
});

export default connect(mapStateToProps)(LoginRequiredRoute);
