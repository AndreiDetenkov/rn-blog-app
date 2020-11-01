import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import { THEME } from '../theme';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId');
  const post = DATA.find((item) => item.id === postId);

  const removeHandler = () => {
    Alert.alert(
      'Remove post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Remove', style: 'destructive', onPress: () => {} },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Remove" color={THEME.DANGER_COLOR} onPress={removeHandler} />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date');
  const booked = navigation.getParam('booked');
  const iconName = booked ? 'ios-star' : 'ios-star-outline';
  return {
    headerTitle: new Date(date).toLocaleDateString('ru-Ru'),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
    fontSize: 20,
  },
});
