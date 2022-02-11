import { StyleSheet, Alert} from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';
import Weather from './Weather';
import React from 'react';
import axios from 'axios';

const API_KEY = 'b587d2c0ae1ad50cc86cdd4f2eb4d363';

export default class extends React.Component {

  state = {
    isLoading: true,
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp}, weather}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, 
      temp: temp, 
      condition: weather[0].main,
    });
    console.log(data);
  }

  getLocation = async () => {
    try{
      Location.requestForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //todo Api
    }catch (error){
      Alert.alert('Location error', 'Give access to geolocation');
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
