import React, { Component } from 'react';
import { Text, View } from 'react-native';

class DateTime extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
  }

  render() {
    setTimeout(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);

    return (
      <View style={styles.containerStyle}>
        <Text style={styles.dateTextStyle}>
          {this.state.time.toDateString()}
        </Text>
        <Text style={[styles.timeTextStyle, this.props.style]}>
          {this.state.time.toLocaleTimeString()}
        </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: 'center'
  },
  timeTextStyle: {
    color: '#007aff',
    fontSize: 60
  },
  dateTextStyle: {
    color: '#007aff',
    fontSize: 32
  }
};

export { DateTime };
