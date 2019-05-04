import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>Sign in</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: "#9E3946",
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#9E3946",
    marginLeft: 5,
    marginRight: 5,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { Button };
