import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Text} from 'react-native';
import BgHeader from '../components/BgHeader';
import {CustomButton} from '../components/CustomButton';
import {CustomInput} from '../components/CustomInput';

export interface ForgotPassProps {
  navigation: StackNavigationProp<any>;
}

export function ForgotPass({navigation}: ForgotPassProps) {
  const [email, setEmail] = useState('');

  const regexEmail = /\S+@\S+\.\S+/;

  return (
    <BgHeader
      title="Forgot Password"
      onBack={() => {
        navigation.goBack();
      }}>
      <CustomInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email address"
        correct={regexEmail.test(email)}
        style={{marginTop: 25}}
      />

      <CustomButton
        text="RESET PASSWORD"
        onPress={() => {}}
        style={{marginTop: 75}}
      />
    </BgHeader>
  );
}
