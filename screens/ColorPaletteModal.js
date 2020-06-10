import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const COLORS = [
  { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
  { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
  { colorName: 'Aqua', hexCode: '#00FFFF' },
  { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
  { colorName: 'Azure', hexCode: '#F0FFFF' },
  { colorName: 'Beige', hexCode: '#F5F5DC' },
  { colorName: 'Bisque', hexCode: '#FFE4C4' },
  { colorName: 'Black', hexCode: '#000000' },
  { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
  { colorName: 'Blue', hexCode: '#0000FF' },
  { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
];

const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    !name && Alert.alert('Please enter a palette name');
    const newColorPalette = {
      name,
      colors: [],
    };
    name && navigation.navigate('Home', newColorPalette);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the Palette</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Palette Name"
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorPaletteModal;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    borderRadius: 5,
    marginBottom: 40,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'teal',
    // height: 40,
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
  },
  name: {
    marginBottom: 10,
  },
});
