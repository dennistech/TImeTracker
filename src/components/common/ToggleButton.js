import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class ToggleButton extends Component {
  state = {
    defaultOffText: 'Default: Off',
    defaultOnText: 'Default: On',
    text: '',
    onPressFunction: null,
    toggledOn: false
  };

  componentWillMount() {
    this.setState({
      text: this.props.offText || this.state.defaultOffText,
      onPressFunction: this.props.onPressOn });
  }

  onPressToggle = () => {
    if (this.state.toggledOn) {
      this.setState({
        text: this.props.offText || this.state.defaultOffText,
        onPressFunction: this.props.onPressOn
      });
    } else {
      this.setState({
        text: this.props.onText || this.state.defaultOnText,
        onPressFunction: this.props.onPressOff
      });
    }

    this.state.onPressFunction();
    this.setState({ toggledOn: !this.state.toggledOn });
  }

  render() {
    const { textStyle, buttonStyle } = styles;

    return (
      <TouchableOpacity onPress={this.onPressToggle} style={buttonStyle}>
        <Text style={textStyle}>
          {this.state.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { ToggleButton };
