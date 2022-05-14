import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouterName="home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <RenderIcon name="home" focused={focused} />
        //   ),
        //   title: 'Home',
        //   tabBarLabelStyle: {
        //     fontSize: moderateScale(10),
        //     fontFamily: 'Helvetica-Regular',
        //   },
        // }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <RenderIcon name="user" focused={focused} />
        //   ),
        //   title: 'Akun',
        //   tabBarLabelStyle: {
        //     fontSize: moderateScale(10),
        //     fontFamily: 'Helvetica-Regular',
        //   },
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
