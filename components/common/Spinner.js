import React from "react";
import { View, ActivityIndicator } from "react-native";

const Spinner = ({ size }) => {
  const { container } = styles;
  return (
    <View style={container}>
      <ActivityIndicator size={size || "large"} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  }
};

export { Spinner };
