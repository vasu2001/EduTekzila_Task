import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface CustomButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function CustomButton({
  onPress,
  text,
  style,
  disabled,
}: CustomButtonProps) {
  return (
    <TouchableOpacity {...{disabled, onPress, style}}>
      <Text style={[styles.text, disabled && {backgroundColor: 'darkgrey'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: '#98d33c',
    padding: 18,
    color: 'white',
    borderRadius: 30,
    fontSize: 16,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
  },
});
