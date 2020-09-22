import {StackNavigationProp} from '@react-navigation/stack';
import React, {createRef, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import BgHeader from '../components/BgHeader';
import {CustomButton} from '../components/CustomButton';

export interface VerifyOTPProps {
  navigation: StackNavigationProp<any>;
}

export function VerifyOTP({navigation}: VerifyOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRef = [
    createRef<TextInput>(),
    createRef<TextInput>(),
    createRef<TextInput>(),
    createRef<TextInput>(),
  ];

  return (
    <BgHeader
      title="Verify OTP"
      onBack={() => {
        navigation.goBack();
      }}>
      <View style={styles.row}>
        {otp.map((o, i) => (
          <TextInput
            style={styles.input}
            maxLength={1}
            ref={inputRef[i]}
            keyboardType="number-pad"
            value={o}
            onChangeText={(text) => {
              const newOtp = [...otp];
              newOtp[i] = text;
              setOtp(newOtp);
              if (text !== '') {
                if (i !== 3) inputRef[i + 1].current?.focus();
                else Keyboard.dismiss();
              }
            }}
            onKeyPress={({nativeEvent: {key}}) => {
              if (key == 'Backspace' && i > 0) {
                inputRef[i - 1].current?.focus();
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>

      <CustomButton
        text="VERIFY MOBILE NUMBER"
        onPress={() => {}}
        style={styles.submitButton}
      />
    </BgHeader>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginRight: 15,
    width: 50,
    fontSize: 18,
    textAlign: 'center',
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: 25,
  },
  resendText: {
    color: '#98d33c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop: 100,
    marginBottom: 15,
  },
});
