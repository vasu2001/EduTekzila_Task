import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export interface CustomInputProps {
  value: string;
  onChangeText: (a: string) => void;
  hidden?: boolean;
  correct?: boolean;
  placeholder?: string;
  keyboardType?: 'email-address' | 'phone-pad';
  maxLength?: number;
  style?: StyleProp<ViewStyle>;
}

export function CustomInput({
  value,
  onChangeText,
  correct,
  hidden,
  placeholder,
  keyboardType,
  maxLength,
  style,
}: CustomInputProps) {
  const [show, setShow] = useState(!hidden);

  return (
    <View style={[styles.main, style]}>
      <TextInput
        {...{value, onChangeText, placeholder, keyboardType, maxLength}}
        style={styles.input}
        autoCorrect={false}
        spellCheck={false}
        secureTextEntry={hidden && !show}
      />
      {correct && <MaterialIcons name="check" size={20} color="#98d33c" />}
      {hidden && (
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Entypo name={show ? 'eye' : 'eye-with-line'} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f2f3f7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
});
