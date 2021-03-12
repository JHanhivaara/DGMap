import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyStack from './src/navigator/Navigation';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer >
        <MyStack></MyStack>
      </NavigationContainer>
  )
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
