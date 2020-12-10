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
import {RawButton, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-native-shared-element';
import vwcars, {buttons, colors} from '../config/vwcars';
import RowButton from '../components/RowButton';

const width = Dimensions.get('window').width;

const CarDetails = ({navigation, route}) => {
  const {item} = route.params;
  console.log('item is: ', `item.${item.key}.image`);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{zIndex: 2, position: 'absolute', right: 16, top: 16}}>
        <Image
          source={require('../assets/icon/close.png')}
          style={{
            width: 24,
            height: 24,
          }}
        />
      </TouchableOpacity>
      <SharedElement id={`item.${item.key}.image`}>
        <Image source={{uri: item.image}} style={styles.image} />
      </SharedElement>
      <View style={styles.meta}>
        <SharedElement id={`item.${item.key}.model`}>
          <Text style={styles.model} numberOfLines={1} adjustsFontSizeToFit>
            {item.model}
          </Text>
        </SharedElement>
        <SharedElement id={`item.${item.key}.description`}>
          <Text style={styles.description}>{item.description}</Text>
        </SharedElement>
      </View>
      <ScrollView
        horizontal
        style={{flexGrow: 0}}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 16}}>
        {colors.map((color) => {
          return (
            <View
              key={color}
              style={[styles.switch, {backgroundColor: color}]}
            />
          );
        })}
      </ScrollView>
      {buttons.map((text, index) => {
        return <RowButton key={index} text={text} />;
      })}
    </SafeAreaView>
  );
};

CarDetails.SharedElements = (navigation, otherNavigation, showing) => {
  const item = navigation.getParam('item');
  return [
    {
      id: `item.${item.key}.image`,
      animation: 'move',
      resize: 'auto',
      align: 'auto',
    },
    {
      id: `item.${item.key}.model`,
      animation: 'move',
      resize: 'auto',
      align: 'auto',
    },
    {
      id: `item.${item.key}.description`,
      animation: 'move',
      resize: 'auto',
      align: 'auto',
    },
  ];
};

export default CarDetails;

const styles = StyleSheet.create({
  image: {
    marginTop: 90,
    width: width * 2.1,
    height: width * 0.9,
    resizeMode: 'contain',
  },
  meta: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: width * 0.6,
  },
  model: {
    fontSize: 32,
    fontWeight: '700',
    position: 'absolute',
  },
  description: {
    fontSize: 12,
    opacity: 0.7,
    position: 'absolute',
    top: 40,
  },
  switch: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginRight: 16,
  },
});
