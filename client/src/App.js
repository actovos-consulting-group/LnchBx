import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import { Provider } from '@actovos-consulting-group/ui-core';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import MyTheme from './theme';
import Login from './components/Login';
import { API } from './constants';
import StorageHelper from './helpers/Storage';

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
    // TODO: this should do something else *shrug*
    return children;
  }
};

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  user: {},
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  let history = useHistory();

  const handleLogin = response => {
    StorageHelper.set('user', response);
    setIsLoggedIn(true);
    setUserData(response);
    history.push('/dashboard');
  };

  const handleLogout = userID => {
    axios
      .post(`${API.host}/api/auth/logout`, userID)
      .then(data => {
        StorageHelper.delete('user');
        setIsLoggedIn(false);
      })
      .catch(error => alert(error));
  };

  const authData = { isLoggedIn, handleLogin, userData, handleLogout };

  useEffect(() => {
    isLoggedIn && history.push('/dashboard');
  }, [isLoggedIn]);

  useEffect(() => {
    // TODO: this is terrible. have to secure
    const user = StorageHelper.get('user');
    if (user) {
      setIsLoggedIn(true);
      setUserData(user);
    }
  }, []);

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
          <Route path="*" render={() => <Redirect to="/login" />} />
        </Switch>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;
