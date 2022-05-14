import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRouter from './src/router/MainRouter';
import {Provider} from 'react-redux';
import {store} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
