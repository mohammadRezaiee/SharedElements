import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-native-shared-element';
import vwcars from '../config/vwcars';

const ITEM_SIZE = 120;
const BG_COLOR = '#C1CEE077';

export default function ({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <FlatList
        data={vwcars}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{padding: 16}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('CarDetail', {item})}>
              <View style={styles.item}>
                <View>
                  <SharedElement id={`item.${item.key}.model`}>
                    <Text style={styles.model}>{item.model}</Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.key}.description`}>
                    <Text style={styles.description}>{item.description}</Text>
                  </SharedElement>
                </View>
                <SharedElement
                  id={`item.${item.key}.image`}
                  style={styles.image}>
                  <Image
                    source={{uri: item.image}}
                    style={{flex: 1, resizeMode: 'center'}}
                  />
                </SharedElement>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: ITEM_SIZE,
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    backgroundColor: BG_COLOR,
    overflow: 'hidden',
  },
  model: {
    fontSize: 18,
    fontWeight: '700',
    position: 'absolute',
  },
  description: {
    fontSize: 12,
    opacity: 0.7,
    position: 'absolute',
    top: 28,
  },
  image: {
    height: ITEM_SIZE * 1.2,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: '-40%',
  },
});
