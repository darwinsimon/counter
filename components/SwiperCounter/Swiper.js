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
      count: 0,
    };

    this.responderMoved = this.responderMoved.bind(this);

    // Create Responder
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: this.responderMoved,
    });
  }

  // Calculate movement
  responderMoved(evt, gestureState) {
    const { dy } = gestureState;
    const { count } = this.state;
    const { onSwipeDown, onSwipeUp } = this.props;
    const c = Math.floor(dy / 40);
    if (c > count) {
      this.setState({
        count: c,
      });

      // Swipe down called
      onSwipeDown();
    } else if (c < count) {
      this.setState({
        count: c,
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
