import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import PalettePreview from '../components/PalettePreview';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefresh, setIsReFresh] = useState(false);

  const fetchPalettes = useCallback(async () => {
    const res = await axios.get(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    setPalettes(res.data);
  }, []);

  const refreshHandler = useCallback(async () => {
    setIsReFresh(true);
    await fetchPalettes();
    setIsReFresh(false);
  }, [fetchPalettes]);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);
  return (
    <FlatList
      style={styles.list}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          onPress={() => navigation.push('ColorPalette', item)}
          palette={item}
        />
      )}
      refreshing={isRefresh}
      onRefresh={refreshHandler}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.modalButton}>Launch Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  modalButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});

export default Home;
