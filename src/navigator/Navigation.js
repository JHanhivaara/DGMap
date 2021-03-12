import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from '../components/screens/MapScreen';
import CourseScreen from '../components/screens/CourseScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={MapScreen}></Stack.Screen>
        <Stack.Screen name='Details' component={CourseScreen}></Stack.Screen>
      </Stack.Navigator>
  );
};

export default MyStack;