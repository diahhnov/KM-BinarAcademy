import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {Provider} from 'react-redux';
import {store} from '../store';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();
const MainRouter = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={BottomTab} />
      </Stack.Navigator>
    </Provider>
  );
};

export default MainRouter;
