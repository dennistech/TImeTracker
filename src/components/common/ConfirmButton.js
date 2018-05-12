import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ConfirmButton = ({ children, onPress, buttonStyle, textStyle }) => {
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
    fontSize: 14,
    fontWeight: '800',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonStyle: {
    backgroundColor: '#007aff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#007aff',
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    width: 250
  }
};

export { ConfirmButton };
