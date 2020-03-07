import React from 'react';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import TrimiteEmail from '../containers/TrimiteEmail';
import ResetPassword from '../containers/ResetPassword';
import ParolaSchimbata from '../containers/ParolaSchimbata';
import Home from '../containers/Home';
import Plata from '../containers/Plata';
import Catalog from '../containers/Catalog';
import Membrii from '../containers/Membrii';
import Setari from '../containers/Setari';
import EditeazaProfil from '../containers/EditeazaProfil';
import ParolaSetari from '../containers/ParolaSetari';
import NotificariSetari from '../containers/NotificariSetari';

// export default createAppContainer(
//   createSwitchNavigator({
//     Main: DrawerNavigator,
//     Login: Login,
//     SignUp: SignUp,
//     TrimiteEmail: TrimiteEmail,
//     ResetPassword: ResetPassword, 
//     ParolaSchimbata: ParolaSchimbata, 
//     Home: Home,
//     Plata: Plata,
//     Catalog: Catalog,
//     Membrii: Membrii,
//     Setari: Setari,
//     EditeazaProfil: EditeazaProfil,
//     ParolaSetari: ParolaSetari,
//     NotificariSetari: NotificariSetari

//   })
// );

function AppNavigator() {
const Stack = createStackNavigator();
return (
    <NavigationContainer>
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
      </Stack.Navigator>   
    </NavigationContainer>
)
}

export default AppNavigator;