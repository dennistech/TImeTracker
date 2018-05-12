import React, { Component } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

class Date extends Component {
  constructor(props) {
    super(props);

    this.state = { date: moment().format('LL') };
  }

  render() {
    setTimeout(() => {
      this.setState({
        date: moment().format('LL')
      });
    }, 1000);

    return (
      <Text style={styles.dateText}>
        {this.state.date}
      </Text>
    );
  }
}

const styles = {
  dateText: {
    color: '#007aff',
    fontSize: 24
  }
};

export { Date };
