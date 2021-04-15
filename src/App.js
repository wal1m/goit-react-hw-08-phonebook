import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Home from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={PhonebookView}
          />
          <Route component={Home} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
