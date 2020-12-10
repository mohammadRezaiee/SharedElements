import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

export default function RowButton({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 26,
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <Text style={{fontSize: 14}}>{text}</Text>
        <Image
          source={require('../assets/icon/Forward.png')}
          style={{width: 16, height: 16, resizeMode: 'contain'}}
        />
      </View>
    </TouchableOpacity>
  );
}
