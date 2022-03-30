import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {Input, Button} from 'react-native-elements';
import axios from 'axios';
import {BASE_URL} from '../../helpers/API';

export default function Login({navigation}) {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const postLogin = async () => {
    try {
      const body = {
        email: Email,
        password: password,
      };

      const res = await axios.put(`${BASE_URL}/users/5`, body);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Input placeholder="Email" onChangeText={text => setEmail(text)} />
      <Input placeholder="Password" onChangeText={text => setPassword(text)} />

      <Button onPress={postLogin} title={'Sign in'} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Don't have account yet ?, Register now</Text>
      </TouchableOpacity>
    </View>
  );
}
