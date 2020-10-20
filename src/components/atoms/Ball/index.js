import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default class Ball extends Component {
  posisition = new Animated.ValueXY(0, 0);

  componentDidMount() {
    Animated.spring(this.posisition, {
      toValue: { x: 300, y: 700 },
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.posisition.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    borderColor: 'green',
    borderRadius: 30,
    borderWidth: 30,
    height: 60,
    width: 60,
  },
});
