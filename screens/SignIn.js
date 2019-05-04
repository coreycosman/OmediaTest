import React, { Component } from "react";
import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner
} from "../components/common";
import CheckedInModal from "../components/CheckedInModal";
import Header from "./Header";
import { Text, View } from "react-native";
import firebase from "firebase";

export default class App extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    errorMsg: "",
    loading: false,
    headerText: "",
    signInText: "Sign in",
    signedIn: false
  };

  handleButtonPress() {
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ errorMsg: "please enter email and password" });
    }
    this.setState({ error: "", loading: true });
    setTimeout(() => {
      this.setState({ loading: false, error: "", errorMsg: "" });
    }, 2000);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(e => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: "",
      errorMsg: "",
      headerText: "Profile",
      signInText: "",
      signedIn: true
    });
  }
  onLoginFail() {
    if (this.state.errorMsg) {
      this.setState({ loading: false });
    } else {
      this.setState({
        error: "authentication failed",
        loading: false
      });
    }
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.handleButtonPress.bind(this)} />;
  }
  renderCheckedInModal() {
    if (this.state.signedIn) {
      return (
        <Card>
          <View>
            <CardSection>
              <CheckedInModal />
            </CardSection>
          </View>
        </Card>
      );
    }
  }

  render() {
    const {
      text,
      error,
      signedInStyle,
      defaultStyle,
      forgotPass,
      forgotPassContainer
    } = this.styles;

    return (
      <View>
        <Header headerText={this.state.headerText} />
        <View style={this.state.signedIn ? signedInStyle : defaultStyle}>
          <Card>
            <CardSection>
              <Text style={text}>{this.state.signInText}</Text>
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry={false}
                label="E-mail"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
            </CardSection>
            <CardSection>
              <Input
                secureTextEntry
                label="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </CardSection>
            <CardSection>{this.renderButton()}</CardSection>
            <CardSection>
              <Text style={error}>{this.state.error}</Text>
              <Text style={error}>{this.state.errorMsg}</Text>
            </CardSection>
            <CardSection>
              <View style={forgotPassContainer}>
                <Text style={forgotPass}>Forgot Your Password?</Text>
              </View>
            </CardSection>
          </Card>
        </View>

        {this.renderCheckedInModal()}
      </View>
    );
  }
  styles = {
    text: {
      fontWeight: "bold",
      fontSize: 30,
      marginBottom: 30
    },
    error: {
      color: "red",
      fontWeight: "bold",
      alignSelf: "center"
    },
    signedInStyle: {
      display: "none"
    },
    defaultStyle: {},
    forgotPass: {
      color: "#1A88E1"
    },
    forgotPassContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20
    }
  };
}
