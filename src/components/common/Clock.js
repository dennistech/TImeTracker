import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { time: moment().format(props.momentFormat) };
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: moment().format(this.props.momentFormat)
      });
    }, 1000);

    return (
      <Text style={[styles.timeText, this.props.style]}>
        {this.state.time}
      </Text>
    );
  }
}

const styles = {
  timeText: {
    color: '#007aff',
    fontSize: 50
  }
};

export { Clock };
