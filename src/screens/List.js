/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-native-shared-element';

import MarketingSlider from '../components/MarketingSlider';
import {DATA, SLIDER_DATA} from '../config/travel';
import Icon from '../components/Icon';

export default function List({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MarketingSlider />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{padding: 16}}
              onPress={() => navigation.push('Detail', {item})}>
              <SharedElement id={`item.${item.id}.icon`}>
                <Icon uri={item.imageUri} />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
