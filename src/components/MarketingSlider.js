/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList, Text, Dimensions} from 'react-native';
import {SLIDER_DATA} from '../config/travel';
//import {ITEM_WIDTH, width, SPACING} from '../config/theme';

const width = Dimensions.get('window').width;

export default function MarketingSlider() {
  return (
    <FlatList
      data={SLIDER_DATA}
      keyExtractor={(item) => item.color}
      horizontal
      snapToInterval={250 + 16 * 2}
      contentContainerStyle={{paddingRight: width - 250 - 16 * 2}}
      decelerationRate={'fast'}
      renderItem={({item}) => {
        return (
          <View style={[styles.itemContainer, {backgroundColor: item.color}]}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 250,
    height: 250 * 0.6,
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
