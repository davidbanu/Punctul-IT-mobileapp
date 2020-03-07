import React from 'react';
import {View,Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../containers/Home';
import Catalog from '../containers/Catalog';
import Plata from '../containers/Plata';
import Membrii from '../containers/Membrii';
import Setari from '../containers/Setari';
import Login from '../containers/Login';

const DrawerNavigator = createDrawerNavigator({
    Home: Home,
    Catalog: Catalog,
    Plata: Plata,
    Membrii: Membrii,  
    Setari: Setari,
    Iesi: Login
  });


  export default DrawerNavigator;