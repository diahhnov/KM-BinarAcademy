import React, {useEffect}from "react";
import {NavigationContainer} from '@react-navigation/native';
import Mainroutes from "./src/routes/Mainroutes";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Mainroutes />
    </NavigationContainer>
  )
};