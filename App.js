import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './src/screens/MapScreen'
import {locations} from './src/data/data'

export default class App extends Component {
  render(){
    return (
      
      <View styles={styles.container}>
        <MapScreen
        
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
