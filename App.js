import {Easing, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import List from './src/screens/List';
import Detail from './src/screens/Detail';
import {enableScreens} from 'react-native-screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import CarList from './src/screens/CarList';
import CarDetails from './src/screens/CarDetails';

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List" headerMode="none">
        <Stack.Screen name="CarList" component={CarList} />
        <Stack.Screen
          name="CarDetail"
          component={CarDetails}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {
                animation: 'spring',
                config: {
                  stiffness: 1000,
                  damping: 500,
                  mass: 3,
                  overshootClamping: true,
                  restDisplacementThreshold: 10,
                  restSpeedThreshold: 10,
                },
                /*animation: 'timing',
                config: {duration: 500, easing: Easing.inOut(Easing.ease)},*/
              },
              close: {
                animation: 'spring',
                config: {
                  stiffness: 1000,
                  damping: 500,
                  mass: 3,
                  overshootClamping: true,
                  restDisplacementThreshold: 10,
                  restSpeedThreshold: 10,
                },
                /*animation: 'spring',
                config: {duration: 500, easing: Easing.inOut(Easing.ease)},*/
              },
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
