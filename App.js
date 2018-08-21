import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SwiperCounter from './components/SwiperCounter/SwiperCounter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwiperCounter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
