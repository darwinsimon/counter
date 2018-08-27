import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import Swiper from './Swiper';
import style from './SwiperCounter.scss';

const MinimumCounter = 0;

export default class SwiperCounter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.decCounter = this.decCounter.bind(this);
    this.incCounter = this.incCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  // Decrease counter
  decCounter() {
    let { counter } = this.state;
    counter -= 1;
    if (counter < MinimumCounter) {
      counter = MinimumCounter;
    }
    this.setState({
      counter,
    });
  }

  // Increase counter
  incCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  resetCounter() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <Swiper
        onSwipeUp={this.incCounter}
        onSwipeDown={this.decCounter}
        onLongPress={this.resetCounter}
        style={style.counter}
      >
        <Text style={style.counter_text}>{counter}</Text>
        <Text style={style.description_text}>Swipe up or down</Text>
      </Swiper>
    );
  }
}
