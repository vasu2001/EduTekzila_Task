import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import BgHeader from '../components/BgHeader';
import {CustomButton} from '../components/CustomButton';
import {CustomInput} from '../components/CustomInput';
import {_GoogleSignin, _SignIn} from '../redux/actions';
import {GoogleSigninButton} from '@react-native-community/google-signin';

export interface SignInProps {
  navigation: StackNavigationProp<any>;
}

export function SignIn({navigation}: SignInProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const signIn = () => {
    _SignIn(dispatch)(email.trim(), password, () => {});
  };

  const googleSignin = () => {
    _GoogleSignin(dispatch)(() => {});
  };

  const regexEmail = /\S+@\S+\.\S+/;

  return (
    <BgHeader title="Welcome Back!" onBack={() => {}}>
      <GoogleSigninButton
        style={{alignSelf: 'center', marginTop: 20}}
        size={GoogleSigninButton.Size.Wide}
        onPress={googleSignin}
      />

      <Text style={styles.text1}>OR LOG IN WITH EMAIL</Text>
      <CustomInput
        value={email}
        onChangeText={setEmail}
        correct={regexEmail.test(email)}
        placeholder="Email address"
      />

      <CustomInput
        value={password}
        onChangeText={setPassword}
        hidden
        placeholder="Password"
      />

      <CustomButton text="LOG IN" onPress={signIn} style={styles.loginBUtton} />

      <View style={styles.row}>
        <Text style={styles.text2}>NEW AROUND HERE?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text style={styles.text3}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.forgotPass}
        onPress={() => {
          navigation.navigate('forgotpass');
        }}>
        <Text style={styles.text4}>Forgot Password?</Text>
      </TouchableOpacity>
    </BgHeader>
  );
}

const styles = StyleSheet.create({
  text1: {
    alignSelf: 'center',
    marginVertical: 18,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'darkgrey',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  text2: {
    color: 'darkgrey',
    marginRight: 5,
    fontWeight: 'bold',
  },
  text3: {
    fontWeight: 'bold',
    color: '#98d33c',
  },
  forgotPass: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  text4: {
    fontWeight: 'bold',
  },
  loginBUtton: {
    marginTop: 20,
  },
});
