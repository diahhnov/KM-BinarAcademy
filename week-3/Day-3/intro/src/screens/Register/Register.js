import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Login from '../Login/Login';
import Poppins from '../../component/Poppins/poppins';


const Register = (props) => {
  return (
    <View>
      <Poppins >Register</Poppins>
      <Poppins type="BoldItalic">Register</Poppins>

      <TouchableOpacity onPress={() => props.navigation.navigate(Login)}>
          <Poppins >Back</Poppins>
      </TouchableOpacity>
    </View>
  );
};

export default Register;