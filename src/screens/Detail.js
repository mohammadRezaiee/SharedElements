import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import {SharedElement} from 'react-native-shared-element';
import Icon from '../components/Icon';
import {DATA} from '../config/travel';

const width = Dimensions.get('window').width;

const Detail = ({navigation, route}) => {
  const {item} = route.params;
  const ref = React.useRef();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);
  const mountedAnimated = React.useRef(new Animated.Value(0)).current;
  const activeIndex = React.useRef(new Animated.Value(selectedItemIndex))
    .current;
  const activeIndexAnimation = React.useRef(
    new Animated.Value(selectedItemIndex),
  ).current;

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  });

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [92, 0, -92],
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={{padding: 12}}
        onPress={() =>
          animation(0).start(() => {
            navigation.goBack();
          })
        }>
        <Image
          source={require('../assets/icon/back.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
          marginLeft: width / 2 - 30 - 16,
          transform: [{translateX}],
        }}>
        {DATA.map((item, index) => {
          const inputRange = [index - 1, index, index + 1];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extraplate: 'clamp',
          });
          return (
            <TouchableOpacity
              style={{padding: 16, alignItems: 'center'}}
              key={index}
              onPress={() => {
                activeIndex.setValue(index);
                ref.current.scrollToIndex({index, animated: true});
              }}>
              <SharedElement id={`item.${item.id}.icon`}>
                <Icon uri={item.imageUri} />
              </SharedElement>
              <Text style={{fontSize: 10}}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
      <Animated.FlatList
        style={{opacity: mountedAnimated, transform: [{translateY}]}}
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onMomentumScrollEnd={(ev) => {
          const newIndex = Math.floor(ev.nativeEvent.contentOffset.x / width);
          activeIndex.setValue(newIndex);
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ScrollView
              style={{
                width: width - 16 * 2,
                margin: 16,
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: 16,
                overflow: 'hidden',
              }}>
              <View style={{padding: 16}}>
                <Text style={{fontSize: 16}}>
                  {Array(50).fill(`${item.title} inner text \n`)}
                </Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

Detail.SharedElements = (route, otherRoute, showing) => {
  //const {item} = route.params;
  return DATA.map((item) => `item.${item.id}.icon`);
  //return [`item.${item.id}.icon`];

  /*const item = navigation.getParam('item');
  return [`item.${item.id}.photo`];*/
};

export default Detail;
