import { View, Text } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = (props) => {
  return (
    <View>
      <Text>Login</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;