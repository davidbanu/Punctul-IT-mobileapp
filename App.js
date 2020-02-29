import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  Image as ReactImage,
  StatusBar,
} from 'react-native';

import Login from './src/containers/Login';
import SignUp from './src/containers/SignUp';
import TrimiteEmail from './src/containers/TrimiteEmail';
import ResetPassword from './src/containers/ResetPassword';
import ParolaSchimbata from './src/containers/ParolaSchimbata';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="SignUp" component={SignUp} />
                  <Stack.Screen name="TrimiteEmail" component={TrimiteEmail} />
                  <Stack.Screen name="ResetPassword" component={ResetPassword} />
                  <Stack.Screen name="ParolaSchimbata" component={ParolaSchimbata} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
