import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';
import {BASE_URL} from '../../helpers/API';

export default function Register({navigation}) {
  const [Job, setJob] = useState('');
  const [name, setName] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [firstname, setFirstname] = useState('');
  //   const [lastname, setLastname] = useState('');
  //   const [phone, setPhone] = useState('');

  const postRegister = async () => {
    try {
      const body = {
        name: name,
        job: Job,
      };
      const res = await axios.put(`${BASE_URL}/users/2`, body, {
        validateStatus: status => status < 501,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Input
        placeholder="Job"
        onChangeText={text => {
          setJob(text);
        }}
      />

      <Input
        placeholder="Name"
        onChangeText={text => {
          setName(text);
        }}
      />

      {/* <Input
        placeholder="password"
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <Input
        placeholder="firstname"
        onChangeText={text => {
          setFirstname(text);
        }}
      />

      <Input
        placeholder="lastname"
        onChangeText={text => {
          setLastname(text);
        }}
      />

      <Input
        placeholder="phone"
        keyboardType="phone-pad"
        onChangeText={text => {
          setPhone(text);
        }}
      /> */}

      <Button onPress={postRegister} title={'Sign up'} />
    </ScrollView>
  );
}
