import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { navigation, screenProps } from 'react-navigation';
import { Button } from 'react-native-elements';

  class ReviewScreen extends Component {
    static navigationOptions = ({ navigation }) => {
      const { navigate } = navigation;
      return {
        title: 'Review Jobs',
        headerRight: (
          <Button
            title="Settings"
            onPress={() => navigate('settings')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        )
      };
    }

  render () {
    return (
      <View>
      <Text>Review Screen </Text>
      <Text>Review Screen </Text>
      <Text>Review Screen </Text>
      <Text>Review Screen </Text>
      <Text>Review Screen </Text>
      </View>
      );
  }
}

export { ReviewScreen };
