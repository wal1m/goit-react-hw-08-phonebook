import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthenticated } from '../redux/auth/auth-selectors';

const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector(getAuthenticated);

  return (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={routeProps.redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
