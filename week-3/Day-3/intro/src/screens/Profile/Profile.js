import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Register from '../Register/Register';

const Profile = (props) => {
  return (
    <View>
      <Text>Profile</Text>

      <TouchableOpacity onPress={() => props.navigation.navigate(Register)}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;