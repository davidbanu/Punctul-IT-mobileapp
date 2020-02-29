import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform, Image} from 'react-native';


import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import TrimiteEmail from '../containers/TrimiteEmail';
import ResetPassword from '../containers/ResetPassword';
import ParolaSchimbata from '../containers/ParolaSchimbata';

const screens = createStackNavigator(
                    {
                        login: Login,
                        trimite_email: TrimiteEmail,
                        signup: SignUp,
                        parola_schimbata: ParolaSchimbata,
                        reset_password: ResetPassword
                    },
                    {
                        initialRouteName:'login',
                        defaultNavigationOptions: {
                            headerStyle: {
                                height: theme.sizes.base*4,
                                backgroundColor: theme.colors.white,
                                borderBottomColor: "transparent",
                                elevation: 0 //for android devices. Disabling the elevation of header
                            },
                            headerBackImage: <Image source={require('../assets/icons/back.png')}/>,
                            headerBackTitle: null,
                            headerLeftContainerStyle: {
                                alignItems: 'center',
                                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
                                padding: theme.sizes.base,
                            },
                            headerRightContainerStyle: {
                                alignItems: 'center',
                                marginLeft: Platform.OS === 'ios' ? theme.sizes.base : 0,
                                padding: theme.sizes.base,
                            },
                        }
                    }
                );

export default createAppContainer(screens);