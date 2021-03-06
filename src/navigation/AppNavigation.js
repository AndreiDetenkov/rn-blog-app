import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { BookedScreen } from '../screens/BookedScreen'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
  }
}

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigatorOptions
)

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  navigatorOptions
)

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navigatorOptions
)

const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigatorOptions
)

const routeConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-albums" size={24} color={info.tintColor} />,
      tabBarLabel: 'All Posts'
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-star" size={24} color={info.tintColor} />,
      tabBarLabel: 'Booked Posts'
    }
  }
}

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(routeConfig, {
        activeTintColor: '#fff',
        barStyle: {
          backgroundColor: THEME.MAIN_COLOR
        },
        shifting: true
      })
    : createBottomTabNavigator(routeConfig, {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      })

const MainNavigator = createDrawerNavigator(
  {
    Posts: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Main'
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About'
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'Create Post'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: 'open-bold'
      }
    }
  }
)

export const AppNavigator = createAppContainer(MainNavigator)
