import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, PanResponder } from 'react-native';

class Swiper extends Component {
  static propTypes = {
    onSwipeUp: PropTypes.func,
    onSwipeDown: PropTypes.func,
  }

  static defaultProps = {
    onSwipeUp: () => {},
    onSwipeDown: () => {},
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      movement: 0,
    };

    this.responderMoved = this.responderMoved.bind(this);
    this.responderStopped = this.responderStopped.bind(this);

    // Create Responder
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: this.responderMoved,
      onPanResponderRelease: this.responderStopped,
    });
  }

  responderStopped(evt, gestureState) {
    // Reset movement
    this.setState({
      movement: 0,
    });
  }

  // Calculate movement
  responderMoved(_, gestureState) {
    const { dy } = gestureState;
    const { movement } = this.state;
    const { onSwipeDown, onSwipeUp } = this.props;
    const c = Math.floor(dy / 40);
    if (c > movement) {
      this.setState({
        movement: c,
      });

      // Swipe down called
      onSwipeDown();
    } else if (c < movement) {
      this.setState({
        movement: c,
      });

      // Swipe up called
      onSwipeUp();
    }
  }

  render() {
    return (
      <View {...this.props} {...this.panResponder.panHandlers} />
    );
  }
}

export default Swiper;
