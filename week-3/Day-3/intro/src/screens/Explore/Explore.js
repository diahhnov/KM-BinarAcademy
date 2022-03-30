import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Profile from '../Profile/Profile'

const Explore = (props) => {
  return (
    <View>
      <Text>Explore</Text>
      
      <TouchableOpacity onPress={() => props.navigation.navigate(Profile)}>
          <Text>click</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Explore