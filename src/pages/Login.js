import React, { Component } from 'react';
import { View, Text,Alert, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StackActions, NavigationActions } from 'react-navigation';

import api from '../services/api';
export default class Login extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    username: "",
    password: ""
  }

  handleLogin = () => {
    this.navigateToDashboard();
  }
  handleCadastrar = () => {
    this.props.navigation.navigate("Criar_usuario");
  }

  navigateToDashboard = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
    })
    this.props.navigation.dispatch(resetAction);
  }

  handleUserChange = username => {
    this.setState({ username });
  }

  handlePasswordChange = password => {
    this.setState({ password });
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Seu Numero"
            value={this.state.username}
            onChangeText={this.handleUserChange}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.button}
            onPress={this.handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
            onPress={this.handleCadastrar}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 15
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});