/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import Store from './src/Store';
import { Provider } from 'react-redux';
import Login from './src/containers/Login'

const App = () => {
return(
  <Provider store={Store}>
  <Login />
</Provider>
)

};

export default App;