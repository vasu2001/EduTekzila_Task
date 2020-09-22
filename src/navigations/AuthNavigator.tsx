import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text} from 'react-native';
import BgHeader from '../components/BgHeader';
import {ForgotPass} from '../screens/ForgotPass';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {VerifyOTP} from '../screens/VerifyOTP';

export interface AuthNavigatorProps {}
const Stack = createStackNavigator();

export default function AuthNavigator(props: AuthNavigatorProps) {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="signup" component={SignUp} />
      <Stack.Screen name="forgotpass" component={ForgotPass} />
      <Stack.Screen name="verifyotp" component={VerifyOTP} />
    </Stack.Navigator>
  );
}
