import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {storeInterface} from '../redux/utils';
import {Home} from '../screens/Home';
import AuthNavigator from './AuthNavigator';

export interface MainNavigatorProps {}

export function MainNavigator(props: MainNavigatorProps) {
  const {isLoggedIn} = useSelector((store: storeInterface) => store);

  return isLoggedIn ? <Home /> : <AuthNavigator />;
}
