import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DetailMovie = ({route}) => {
  const {params} = route.params;
  const movieId = params.movieId;
  const navigation = useNavigation;
  return (
    <View>
      <Text>DetailMovie</Text>
    </View>
  );
};

export default DetailMovie;
