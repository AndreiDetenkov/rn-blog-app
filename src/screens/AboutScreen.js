import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = ({}) => {
  return (
    <View style={styles.center}>
      <Text>Posts Application</Text>
      <Text>
        Version <Text style={styles.version}>1.0.0</Text>
      </Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle menu" iconName="ios-menu" onPress={() => navigation.toggleDrawer()} />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  version: {
    fontWeight: 'bold'
  }
})
