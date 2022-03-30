/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from './src/helpers/apiAccessToken';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  const [listMovieData, setListMovieData] = useState({});
  const [listNumber, setListNumber] = useState([]);
  const [startData, setStartData] = useState(1);
  const [endData, setEndData] = useState(6);
  const [curentPage, setCurentPage] = useState(1);

  useEffect(() => {
    getListMovieLatest(curentPage);
  }, [curentPage]);

  useEffect(() => {
    renderListNumber();
  }, [listMovieData]);

  const getListMovieLatest = async page => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/popular?page=${page}`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results);
      setListMovieData(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CardMovie = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 200}}
          resizeMode="cover"
        />
        <Text>{item.title}</Text>
      </View>
    );
  };

  if (!'results' in listMovieData) {
    return null;
  }

  const renderListNumber = () => {
    let renderer = [];

    for (let index = startData; index < endData; index++) {
      renderer.push({
        title: index,
        isActive: index === 1 ? true : false,
      });
    }

    setListNumber(renderer);
  };

  const FooterComponent = () => {
    return (
      <View flexDirection="row" justifyContent="center" flex={1}>
        <View flexDirection="row">
          <TouchableOpacity
            onPress={() => setCurentPage(1)}
            style={{marginRight: 2}}>
            <Feather name="chevrons-left" color={'#2094F6'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (curentPage > 1) {
                setCurentPage(prevState => prevState - 1);
              }
            }}>
            <Feather name="chevron-left" color={'#2094F6'} size={24} />
          </TouchableOpacity>
        </View>
        <View flexDirection="row">
          {listNumber.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setCurentPage(index + 1);
                }}
                key={item.title}
                style={{
                  backgroundColor: index === curentPage - 1 ? '#2094F6' : null,
                  marginRight:
                    parseInt(item.title) === renderListNumber.length ? 0 : 20,
                }}>
                <Text
                  style={{color: index === curentPage - 1 ? 'white' : '#666'}}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View flexDirection="row">
          <TouchableOpacity
            onPress={() => {
              if (curentPage < 5) {
                setCurentPage(prevState => prevState + 1);
              }
            }}>
            <Feather name="chevron-right" color={'#2094F6'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCurentPage(5);
            }}
            style={{marginLeft: 2}}>
            <Feather name="chevrons-right" color={'#2094F6'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View flex={1}>
      <Text>List Movie</Text>

      <View>
        <TouchableOpacity>
          <Text>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Top Rated</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Now Playing</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={listMovieData.results}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
        ListFooterComponent={FooterComponent}
      />
    </View>
  );
}
