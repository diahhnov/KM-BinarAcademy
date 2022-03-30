import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';


const Stack = createStackNavigator ();

const Mainroutes = () => {
  return (
    <Stack.Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
        <Stack.Screen name ="Main" component={BottomTab}  />
        <Stack.Screen name ="Login" component={Login} />
        <Stack.Screen name ="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Mainroutes;
