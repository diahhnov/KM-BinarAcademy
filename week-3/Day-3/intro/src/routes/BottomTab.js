import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//screen
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Explore from '../screens/Explore/Explore';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator initialRouterName="Home" screenOptions={{headerShown: false}}>
            <Tab.Screen name ="Home" component={Home} options={{ tabBarIcon : () => <Feather  name="home" size={20} color='black'/>}} />
            <Tab.Screen name ="Explore" component={Explore} options={{ tabBarIcon : () => <MaterialIcons  name="explore" size={20} color='black'/>}} />
            <Tab.Screen name ="Profile" component={Profile} options={{ tabBarIcon : () => <AntDesign  name="profile" size={20} color='black'/>}} />
        </Tab.Navigator>
    )
}

export default BottomTab;