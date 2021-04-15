import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthenticated } from '../redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(getAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={routeProps.redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { authSelectors } from '../redux/auth';

// /**
//  * - Если маршрут приватный и пользователь залогинен, рендерит компонент
//  * - В противном случае рендерит Redirect на /login
//  */
// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
