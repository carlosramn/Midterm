import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';

export default class App extends React.Component{


  render() {
    return (
      <View style={styles.container}>
      <MapView style={styles.estilomapa} 
      initialRegion={{
        latitude: 19.4301133,
        longitude:  -99.2817071,
        latitudeDelta: .2,
        longitudeDelta: .2
      }}>
      <MapView.Marker
        coordinate={{
          latitude: 19.4188855,
          longitude: -99.2681265
        }}
        title = 'TIENDAS 3B'
        description ='Tienda 3B Comunicaciones'
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude: 19.4295568,
          longitude: -99.2720449
        }}
        title = 'TIENDAS 3B'
        description ='Tienda 3B Molinito el Viento'
      >
      </MapView.Marker>
      <MapView.Marker
        coordinate={{
          latitude: 19.4378058,
          longitude: -99.2883939
        }}
        title = 'TIENDAS 3B'
        description ='Tienda 3B De los Pinos'
      >
      </MapView.Marker>
      </MapView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estilomapa:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});