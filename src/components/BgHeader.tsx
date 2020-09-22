import React, {ReactNode} from 'react';
import {
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export interface BgHeaderProps {
  children: ReactNode;
  title: string;
  onBack: () => void;
}

const {width} = Dimensions.get('screen');

export default function BgHeader({children, title, onBack}: BgHeaderProps) {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../assets/bg_top.jpg')}
        style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <MaterialIcons name="arrow-back" size={22} />
        </TouchableOpacity>
      </ImageBackground>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width,
    height: width * 0.63,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 30,
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 20,
  },
});
