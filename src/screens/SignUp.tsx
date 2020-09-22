import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BgHeader from '../components/BgHeader';
import {CustomInput} from '../components/CustomInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomButton} from '../components/CustomButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {_SignUp} from '../redux/actions';

export interface SignUpProps {
  navigation: StackNavigationProp<any>;
}

export function SignUp({navigation}: SignUpProps) {
  const [name, setName] = useState('');
  const [phNo, setPhNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tnc, setTnc] = useState(false);

  const dispatch = useDispatch();
  const signUp = () => {
    _SignUp(dispatch)(email.trim(), password, name, phNo.trim(), () => {
      navigation.navigate('verifyotp');
    });
  };

  const regexEmail = /\S+@\S+\.\S+/;

  return (
    <BgHeader
      title="Let's create your account"
      onBack={() => {
        navigation.goBack();
      }}>
      <CustomInput
        value={name}
        onChangeText={setName}
        correct={name != ''}
        placeholder="Name"
      />
      <CustomInput
        value={phNo}
        onChangeText={setPhNo}
        correct={phNo.length === 10}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        maxLength={10}
      />
      <CustomInput
        value={email}
        onChangeText={setEmail}
        correct={regexEmail.test(email)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <CustomInput
        value={password}
        onChangeText={setPassword}
        hidden
        placeholder="Password"
      />

      <View style={styles.tncRow}>
        <Text style={styles.tncText}>{`I agree with FarmTap T&C`}</Text>
        <TouchableOpacity
          style={[
            styles.tncBox,
            tnc && {backgroundColor: '#98d33c', borderWidth: 0},
          ]}
          onPress={() => {
            setTnc(!tnc);
          }}>
          {tnc && <MaterialIcons name="check" size={20} color="#ffffff" />}
        </TouchableOpacity>
      </View>

      <CustomButton
        onPress={signUp}
        text="GET STARTED"
        style={{marginVertical: 25}}
      />
    </BgHeader>
  );
}

const styles = StyleSheet.create({
  tncRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginHorizontal: 30,
    marginTop: 20,
  },
  tncText: {
    color: '#98d33c',
  },
  tncBox: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
