import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './app/(tabs)/index';
import sendMoney from './app/(tabs)/sendMoney';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="sendMoney" component={sendMoney} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}