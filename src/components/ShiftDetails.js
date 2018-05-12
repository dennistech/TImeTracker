import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { Button } from './common';
import { completedShiftDelete } from '../actions';

const styles = {
  containerStyle: {
    flex: 1,
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  },
  shiftDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 5
  },
  shiftDetailsStyle: {
    flex: 1,
    alignItems: 'center'
  },
  timeTextStyle: {
    textAlign: 'center',
    fontSize: 18
  },
  labelTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12
  }
};

class ShiftDetails extends Component {
  onButtonPress() {
    const { id } = this.props.selectedShift;

    this.props.completedShiftDelete({ id });
  }

  formatTime(time) {
      return time === '' || moment(time).format('LT');
  }

  render() {
    const { shiftStart, shiftEnd, breakStart, breakEnd } = this.props.selectedShift;
    const { timeTextStyle, labelTextStyle } = styles;

    return (
      <View style={styles.containerStyle}>
        <View style={styles.shiftDetailsContainer}>
          <View style={styles.shiftDetailsStyle}>
            <Text style={labelTextStyle}>Shift Start: </Text>
            <Text style={timeTextStyle}>{this.formatTime(shiftStart)}</Text>
          </View>
          <View style={styles.shiftDetailsStyle}>
            <Text style={labelTextStyle}>Break Start: </Text>
            <Text style={timeTextStyle}>{this.formatTime(breakStart)}</Text>
          </View>
          <View style={styles.shiftDetailsStyle}>
            <Text style={labelTextStyle}>Break End: </Text>
            <Text style={timeTextStyle}>{this.formatTime(breakEnd)}</Text>
          </View>
          <View style={styles.shiftDetailsStyle}>
            <Text style={labelTextStyle}>Shift End: </Text>
            <Text style={timeTextStyle}>{this.formatTime(shiftEnd)}</Text>
          </View>
        </View>

        <Button onPress={this.onButtonPress.bind(this)}>
          Delete Shift
        </Button>
      </View>
    );
  }
}

export default connect(null, { completedShiftDelete })(ShiftDetails);
