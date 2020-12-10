/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default function Icon({uri}) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri}} resizeMode="contain" style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 60 * 0.6,
    height: 60 * 0.6,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
