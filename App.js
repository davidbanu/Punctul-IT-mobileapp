import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image as ReactImage,
  StatusBar,
  AppRegistry
} from 'react-native';

import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import TrimiteEmail from './src/containers/TrimiteEmail';
import ResetPassword from './src/containers/ResetPassword';
import ParolaSchimbata from './src/containers/ParolaSchimbata';
import Home from './src/containers/Home';
import Plata from './src/containers/Plata';
import Catalog from './src/containers/Catalog';
import Membrii from './src/containers/Membrii';
import Setari from './src/containers/Setari';

import {
  Header,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  render() {

    createHomeStack = () =>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TrimiteEmail" component={TrimiteEmail} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Parola Schimbata" component={ParolaSchimbata} />
      <Stack.Screen name="Plata" component={Plata} /> 
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Membrii" component={Membrii} />
      <Stack.Screen name="Setari" component={Setari} />
    </Stack.Navigator>

    return (
      <NavigationContainer>
          <Drawer.Navigator>
              <Drawer.Screen name="Login" children={createHomeStack} />
              <Drawer.Screen name="Signup" component={SignUp} />
              <Drawer.Screen name="Home"  component={Home} /> 
              <Drawer.Screen name="Setari" component={Setari} />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
