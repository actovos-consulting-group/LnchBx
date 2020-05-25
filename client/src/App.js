import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import { Provider } from '@actovos-consulting-group/ui-core';
import MyTheme from './theme';

function App() {
  return (
    <Provider theme={MyTheme}>
      <Layout />
    </Provider>
  );
}

export default App;
