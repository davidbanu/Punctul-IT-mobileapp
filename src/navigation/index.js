//import React from 'react';
//import {createAppContainer, createStackNavigator} from 'react-navigation';
//import {Platform, Image} from 'react-native';
//
//
//import Login from './src/containers/Login';
//import SignUp from './src/containers/SignUp';
//import TrimiteEmail from './src/containers/TrimiteEmail';
//
//
//const screens = createStackNavigator(
//                    {
//                        login: Login,
//                        trimite_email: TrimiteEmail,
//                        signup: SignUp
//                    },
//                    {
//                        initialRouteName:'browse',
//                        defaultNavigationOptions: {
//                            headerStyle: {
//                                height: theme.sizes.base*4,
//                                backgroundColor: theme.colors.white,
//                                borderBottomColor: "transparent",
//                                elevation: 0 //for android devices. Disabling the elevation of header
//                            },
//                            headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
//                            headerBackTitle: null,
//                            headerLeftContainerStyle: {
//                                alignItems: 'center',
//                                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
//                                padding: theme.sizes.base,
//                            },
//                            headerRightContainerStyle: {
//                                alignItems: 'center',
//                                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
//                                padding: theme.sizes.base,
//                            },
//                        }
//                    }
//                );
//
//export default createAppContainer(screens);