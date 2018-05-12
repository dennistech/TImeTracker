import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import ShiftDetails from './ShiftDetails';
import { selectShift } from '../actions';

const styles = {
  containerStyle: {
    borderBottomWidth: 2,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ccffcc',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#007aff',
    position: 'relative'
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};

class ListItem extends Component {
  componentWillUpdate() {
      LayoutAnimation.spring();
  }

  renderShiftDetails() {
    const { completedShift, expanded } = this.props;

    if (expanded) {
      return (
        <ShiftDetails selectedShift={completedShift} />
      );
    }
  }

  render() {
    const { id, shiftStart } = this.props.completedShift;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectShift(id)}
      >
        <View style={styles.containerStyle}>
          <View style={{ flex: 1 }}>
            <Text style={styles.titleStyle}>
              {moment(shiftStart).format('MM/DD/YYYY')}
            </Text>
           {this.renderShiftDetails()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedShiftId === ownProps.completedShift.id;

  return { expanded };
};

export default connect(mapStateToProps, { selectShift })(ListItem);
