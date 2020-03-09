import 'react-native-gesture-handler';
import React, { Component, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


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
import EditeazaProfil from './src/containers/EditeazaProfil';
import ParolaSetari from './src/containers/ParolaSetari';
import NotificariSetari from './src/containers/NotificariSetari';
import NotificariPush from './src/containers/NotificariPush';
import NotificariEmail from './src/containers/NotificariEmail';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

function App () {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
    <Stack.Screen name="EditeazaProfil" component={EditeazaProfil} />
    <Stack.Screen name="ParolaSetari" component={ParolaSetari} />
    <Stack.Screen name="NotificariSetari" component={NotificariSetari} />
    <Stack.Screen name="Notificari Push" component={NotificariPush} />
    <Stack.Screen name="Notificari Email" component={NotificariEmail} />
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


export default App;