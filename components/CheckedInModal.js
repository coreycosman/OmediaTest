import React from "react";
import { View, Text, Image } from "react-native";
import moment from "moment";

export default () => {
  const getDate = moment().format("hh:mm A");
  const { container, image, text } = styles;
  return (
    <View style={container}>
      <Image style={image} source={require("../assets/images/check.png")} />
      <Text style={text}>You have checked in</Text>
      <Text style={text}>to work at</Text>
      <Text style={text}>{getDate}</Text>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: 38,
    height: 75,
    width: 75
  },
  text: {
    fontSize: 20
  }
};
