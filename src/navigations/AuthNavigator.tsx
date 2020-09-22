import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text, Modal, ProgressBarAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import BgHeader from '../components/BgHeader';
import {storeInterface} from '../redux/utils';
import {ForgotPass} from '../screens/ForgotPass';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {VerifyOTP} from '../screens/VerifyOTP';

export interface AuthNavigatorProps {}
const Stack = createStackNavigator();

export default function AuthNavigator(props: AuthNavigatorProps) {
  const {loading} = useSelector((state: storeInterface) => state);

  return (
    <>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="forgotpass" component={ForgotPass} />
        <Stack.Screen name="verifyotp" component={VerifyOTP} />
      </Stack.Navigator>
      <Modal transparent visible={loading}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 30,
              borderRadius: 20,
            }}>
            <ProgressBarAndroid color="#98d33c" />
          </View>
        </View>
      </Modal>
    </>
  );
}
