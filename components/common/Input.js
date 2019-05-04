import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";

const Input = ({ label, value, onChangeText, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text autoCorrect={false} style={labelStyle}>
        {label}
      </Text>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};
const styles = {
  inputStyle: {
    paddingRight: 2,
    paddingLeft: 5,
    fontSize: 10,
    lineHeight: 23,
    flex: 2,
    height: 40,
    width: 100
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1,
    color: "lightgrey"
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.75,
    borderColor: "lightgrey"
  }
};
export { Input };
