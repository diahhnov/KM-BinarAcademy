/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessToken';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setMovie} from './redux/action';

export default function Home() {
  // const [listMovieData, setListMovieData] = useState({});
  const [title, setTitle] = useState('');
  const Popular = useSelector(state => state.Home.listTab[0]);
  const Top_Rated = useSelector(state => state.Home.listTab[1]);
  const Now_Playing = useSelector(state => state.Home.listTab[2]);
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movie.popular);

  useEffect(() => {
    getPopularMovie('popular');
  }, []);

  const getPopularMovie = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/popular`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results);
      dispatch(setMovie(results.data.results));
      setTitle('List Popular Movie');
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMovie = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/top_rated`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results);
      dispatch(setMovie(results.data.results));
      setTitle('List Top Rated Movie');
    } catch (error) {
      console.log(error);
    }
  };
  const getNowPlayingMovie = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/movie/now_playing`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      console.log(results);
      dispatch(setMovie(results.data.results));
      setTitle('List Now Playing');
    } catch (error) {
      console.log(error);
    }
  };

  const navigation = useNavigation();

  const CardMovie = ({item}) => {
    const movieId = item.id;
    return (
      <View style={styles.containnermovie}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailMovie', {params: {movieId}});
            }}>
            <Image
              source={{uri: `${ImageUrl}${item.poster_path}`}}
              style={styles.gambar}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginStart: 10, flex: 1}}>
          <Text style={styles.judul}>{item.title}</Text>
          <Text style={styles.viewers}>Viewers: {item.popularity}</Text>
          <Text style={styles.tgl}>Date: {item.release_date}</Text>
          <Text style={styles.sipnosis}>{item.overview}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginTop: 10}}>
        <Text style={styles.list}>List Movie</Text>
      </View>
      <View style={styles.bar}>
        <TouchableOpacity style={{padding: 15}} onPress={getPopularMovie}>
          <Text>{Popular}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 15}} onPress={getTopRatedMovie}>
          <Text>{Top_Rated}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 15}} onPress={getNowPlayingMovie}>
          <Text>{Now_Playing}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.judul}>{title}</Text>
      <FlatList
        data={movieList}
        keyExtractor={(item, index) => index}
        renderItem={CardMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containnermovie: {
    marginTop: 18,
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#470D21',
    borderRadius: 5,
    borderWidth: 3,
    padding: 10,
  },
  gambar: {
    height: 250,
    width: 150,
    borderRadius: 5,
    flex: 1,
  },
  judul: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  viewers: {
    fontSize: 10,
    marginTop: 10,
    textAlign: 'auto',
  },
  tgl: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'auto',
    fontWeight: '500',
  },
  sipnosis: {
    fontSize: 10,
    marginTop: 10,
    textAlign: 'auto',
  },
  list: {
    fontSize: 35,
    color: '#4C0027',
    alignSelf: 'center',
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  judul: {
    fontSize: 20,
    paddingTop: 10,
    color: '#4C0027',
    marginBottom: 10,
  },
});
