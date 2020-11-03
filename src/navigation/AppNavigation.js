import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';

const PostNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
  }
);

const BottomNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-albums" size={24} color={info.tintColor} />,
    },
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-star" size={24} color={info.tintColor} />,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR
  }
});

export const AppNavigator = createAppContainer(BottomNavigator);
