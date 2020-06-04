import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={[styles.container]}
      data={colors}
      keyExtractor={(_, id) => id.toString()}
      renderItem={({ item: { colorName, hexCode } }) => (
        <ColorBox colorName={colorName} hexCode={hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.title}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default ColorPalette;
