import React from "react";
import { Text, View, Image } from "react-native";

export default props => {
  const {
    viewStyle,
    textStyle,
    profile,
    logoContainer,
    arrowContainer,
    checkedInStyle
  } = styles;
  if (!props.headerText) {
    return (
      <View style={viewStyle}>
        <View style={logoContainer}>
          <Image source={require("../assets/images/logo.png")} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={viewStyle}>
        <View style={arrowContainer}>
          <Image source={require("../assets/images/back-arrow.png")} />
          <Text style={profile}>{props.headerText}</Text>
        </View>
      </View>
    );
  }
};

const styles = {
  viewStyle: {
    backgroundColor: "#9E3946",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 20 },
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 30,
    justifyContent: "center"
  },
  profile: {
    fontSize: 20,
    color: "white",
    marginLeft: 25
  },
  logoContainer: {},
  arrowContainer: {
    alignSelf: "flex-start",
    flexDirection: "row"
  }
};
