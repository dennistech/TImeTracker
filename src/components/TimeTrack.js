import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  displayConfirmModal,
  saveShiftStart,
  saveShiftEnd,
  saveBreakStart,
  saveBreakEnd,
  loadInProgressShift
} from '../actions';
import { DateTime, Button } from './common';
import ConfirmTimeModal from './ConfirmTimeModal';

const styles = {
  timeTrackContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#ddd',
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginBottom: 10,
    marginRight: 5,
    marginTop: 10,
  },
  dateTimeContainer: {
    flex: 4,
    justifyContent: 'center'
  },
  currentShiftContainer: {
    flex: 3,
    paddingLeft: 15,
    paddingRight: 15
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  currentShiftTextLabel: {
    flex: 1,
    fontSize: 32
  },
  currentShiftTextValue: {
    flex: 1,
    fontSize: 32,
    textAlign: 'right'
  }
};

class TimeTrack extends Component {
  state = {
    timeToSave: '',
    actionToConfirm: null
  }

  componentWillMount() {
    this.props.loadInProgressShift();
  }

  buttonPressed(type) {
    this.setState({
      timeToSave: moment().format(),
      actionToConfirm: type
    });
    this.props.displayConfirmModal(true);
  }

  addMinute() {
    this.setState({
      timeToSave: moment(this.state.timeToSave).add(1, 'm').format()
    });
  }

  subtractMinute() {
    this.setState({
      timeToSave: moment(this.state.timeToSave).subtract(1, 'm').format()
    });
  }

  render() {
    const { shiftStart, breakStart, breakEnd } = this.props;
    const { onShift, onBreak, completedBreak } = this.props.shiftStatus;

    return (
      <View style={{ backgroundColor: '#007aff', flex: 1 }}>
        <View style={styles.timeTrackContainer}>
          <View style={styles.dateTimeContainer}>
            <DateTime />
          </View>

          <View style={styles.currentShiftContainer}>
            {onShift &&
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.currentShiftTextLabel}>Shift Start: </Text>
                <Text style={styles.currentShiftTextValue}>{shiftStart}</Text>
              </View>
            }
            {(onBreak || completedBreak) &&
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.currentShiftTextLabel}>Break Start: </Text>
                <Text style={styles.currentShiftTextValue}>{breakStart}</Text>
              </View>
            }
            {completedBreak &&
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.currentShiftTextLabel}>Break End: </Text>
                <Text style={styles.currentShiftTextValue}>{breakEnd}</Text>
              </View>
            }
          </View>

          <View style={styles.buttonsContainer}>
            { !onShift &&
            <Button onPress={this.buttonPressed.bind(this, this.props.saveShiftStart)}>
              Start Shift
            </Button> }
            { onShift && !onBreak &&
            <Button onPress={this.buttonPressed.bind(this, this.props.saveShiftEnd)}>
              End Shift
            </Button> }
            { onShift && !onBreak && !completedBreak &&
            <Button onPress={this.buttonPressed.bind(this, this.props.saveBreakStart)}>
              Start Break
            </Button> }
            { onShift && onBreak &&
            <Button onPress={this.buttonPressed.bind(this, this.props.saveBreakEnd)}>
              End Break
            </Button> }
          </View>

          <ConfirmTimeModal
            visible={this.props.showConfirm}
            timeToSave={this.state.timeToSave}
            actionToConfirm={this.state.actionToConfirm}
            addMinute={this.addMinute.bind(this)}
            subtractMinute={this.subtractMinute.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { shiftStart, shiftEnd, breakStart, breakEnd, showConfirm } = state.timeTrack;

  const shiftStatus = {
    onShift: shiftStart !== '',
    onBreak: breakStart !== '' && breakEnd === '',
    completedBreak: breakStart !== '' && breakEnd !== ''
  };

  return { shiftStart, shiftEnd, breakStart, breakEnd, showConfirm, shiftStatus };
};

export default connect(mapStateToProps, {
  displayConfirmModal,
  saveShiftStart,
  saveShiftEnd,
  saveBreakStart,
  saveBreakEnd,
  loadInProgressShift
})(TimeTrack);
