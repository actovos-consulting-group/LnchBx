import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import { Provider } from '@actovos-consulting-group/ui-core';
import MyTheme from './theme';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Login from './components/Login';

const PrivateRoute = ({ children, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ children, isLoggedIn, ...rest }) => {
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    return children;
  }
};

export const AuthContext = createContext({
  isLoggedIn: 'asdflkj',
  setIsLoggedIn: () => null,
  user: {},
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (isLoggedIn) {
      alert('logged in');
      history.push('/dashboard');
    }
  }, []);

  const handleLogin = value => {
    setIsLoggedIn(value);
    history.push('/dashboard');
  };

  const authData = { isLoggedIn, handleLogin };
  return (
    <Provider theme={MyTheme}>
      <AuthContext.Provider value={authData}>
        <Switch>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/dashboard" isLoggedIn={isLoggedIn}>
            <Layout />
          </PrivateRoute>
        </Switch>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
