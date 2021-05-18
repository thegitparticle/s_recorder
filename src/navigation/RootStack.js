import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppHomePage from '../screens/AppHomePage';
import {NavigationContainer} from '@react-navigation/native';

const HomeStack = createStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="AppHomePage" component={AppHomePage} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;
