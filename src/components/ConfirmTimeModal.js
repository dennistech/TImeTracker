import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Modal } from 'react-native';
import moment from 'moment';
import { Button, ConfirmButton } from './common';
import { displayConfirmModal } from '../actions';

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  timeTextStyle: {
    flex: 5,
    fontSize: 40,
    textAlign: 'center'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  contentContainerStyle: {
    backgroundColor: '#fff',
    marginHorizontal: 25,
    paddingVertical: 25,
    borderRadius: 5,
    justifyContent: 'space-between',
    height: '50%'
  },
  timeContainerStyle: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd'
  },
  confirmButtonsContainer: {
    alignItems: 'center'
  },
  saveButtonStyle: {
    backgroundColor: '#0f0',
    borderColor: '#0f0'
  },
  saveTextStyle: {
    color: '#007aff'
  },
  cancelButtonStyle: {
    backgroundColor: '#fff',
    borderColor: '#fff'
  },
  cancelTextStyle: {
    color: '#007aff'
  },
  timeAdjustButtonStyle: {
    alignSelf: 'center',
    borderRadius: 50,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 3
  },
  timeAdjustTextStyle: {
    fontSize: 32,
    paddingVertical: 0,
    color: '#007aff',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
};

class ConfirmTimeModal extends Component {
  render() {
    const { visible, timeToSave, actionToConfirm } = this.props;
    const {
      containerStyle,
      timeTextStyle,
      contentContainerStyle,
      confirmButtonsContainer
    } = styles;

    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <View style={contentContainerStyle}>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '500' }}>
              Save this time?
            </Text>
            <View style={styles.timeContainerStyle}>
              <Button
                onPress={this.props.subtractMinute}
                buttonStyle={styles.timeAdjustButtonStyle}
                textStyle={styles.timeAdjustTextStyle}
              >
                -
              </Button>
              <Text style={timeTextStyle}>
                { moment(timeToSave).format('LT') }
              </Text>
              <Button
                onPress={this.props.addMinute}
                buttonStyle={styles.timeAdjustButtonStyle}
                textStyle={styles.timeAdjustTextStyle}
              >
                +
              </Button>
            </View>
            <View style={confirmButtonsContainer}>
              <ConfirmButton
                onPress={() => actionToConfirm(timeToSave)}
              >
                SAVE
              </ConfirmButton>
              <ConfirmButton
                onPress={() => this.props.displayConfirmModal(false)}
                buttonStyle={styles.cancelButtonStyle}
                textStyle={styles.cancelTextStyle}
              >
                CANCEL
              </ConfirmButton>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default connect(null, { displayConfirmModal })(ConfirmTimeModal);
