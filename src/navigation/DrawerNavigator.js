import React from 'react';
import {View,Text} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../containers/Home';
import Catalog from '../containers/Catalog';
import Plata from '../containers/Plata';
import Setari from '../containers/Setari';

const DrawerNavigator = createDrawerNavigator({
    Home: Home,
    Catalog: Catalog,
    Plata: Plata, 
    Setari: Setari
  });


  export default DrawerNavigator;