import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const text = {
    fontWeight: 'bold',
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? '#000000'
        : '#ffffff',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={text}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ColorBox;
