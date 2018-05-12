import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
      <Text style={[styles.textStyle, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
