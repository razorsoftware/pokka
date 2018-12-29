import React, { Component } from 'react';

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({ name: 'testDB', createFromLocation: '~sqlite.db' });

import { View, Text, Alert, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';

import { StackActions, NavigationActions } from 'react-navigation';

import api from '../services/api';

// Redux 
import { bindActionCreators } from 'redux';
import { ACTION_SET_GEOLOCATION } from '../actions';

import { connect } from 'react-redux';
import { Autenticacao } from '../actions/autenticacao';

class Login extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    username: "",
    password: "",
    logged: false,
    loading: true
  }

  handleLogin = async () => {

    let res = await api.get('/pokka/usuario/seleciona', {
      params: {
        usuario: this.state.username,
        senha: this.state.password
      }
    }).catch(function (error) {
      Alert.alert("", "Erro de comunicação ou usuário inválido");
    });

    if (res.status == 200) {
      db.transaction(function (tx) {
        tx.executeSql("INSERT INTO usuario VALUES (?)", [this.state.username]);
      });
      this.navigateToDashboard();
    }



  }
  handleCadastrar = () => {
    this.props.navigation.navigate("Criar_usuario");
  }

  navigateToDashboard = () => {
    Alert.alert("", "Salvo no bg ");
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
    })
    this.props.navigation.dispatch(resetAction);
  }



  handleUserChange = username => {
    //  this.props.add(username);
    this.setState({ username });
  }

  handlePasswordChange = password => {
    this.setState({ password });
  }

  handleEvoluir = () => {

    db.transaction(function (tx) {

      tx.executeSql("INSERT INTO usuario VALUES (?)", ['teste']);
    }, function (error) {
      Alert.alert("", "Transaction ERROR: " + error.message);
    }, function () {
      Alert.alert("", "Salvo no bg");
    })
    //   Alert.alert("", "Erro " + errorCallback +" success " + okCallback);

    //  db.transaction(function(tx) {
    //    tx.executeSql('INSERT INTO usuario VALUES (?)', ['teste'])
    //  }, function(error) {
    //    Alert.alert("", "Transaction ERROR: " + error.message);
    //  }, function() {
    //    Alert.alert("", "Salvo no bg");

    //  });
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      logged: false,
      loading: true
    }



    //db.transaction(function(tx) {
    //  tx.executeSql("select * from usuario",(tx,results) =>{
    //    var len = results.rows.length;

    //  if(len > 0){
    //    const resetAction = StackActions.reset({
    //      index: 0,
    //      actions: [NavigationActions.navigate({ routeName: "Dashboard" })]
    //    })
    //    this.props.navigation.dispatch(resetAction);
    // }
    // })
    //})
  }

  componentDidMount() {
    let x = this;
    db.transaction(function (tx) {
      tx.executeSql("select * from usuario", [], (tx, results) => {

        var len = results.rows.length;


        if (len > 0) {
          x.setState({ logged: true });
        }
      });
    });
    this.setState({ loading: false });
  }

  render() {

    const { ACTION_SET_GEOLOCATION, redux_username } = this.props;

    if (this.state.loading) {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.content}>
            <Text style={styles.loadText}>Carregando</Text>
          </View>
        </KeyboardAvoidingView>
      )
    }

    if (this.state.logged) {
      this.navigateToDashboard();
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.content}>
            <Text style={styles.loadText}>Carregando</Text>
          </View>
        </KeyboardAvoidingView>
      )

    }

    if (this.state.loading == false && this.state.logged == false){

      return (

        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.content}>
            <Text>POKKA {this.state.logged == true ? "Boa" : "Deslogado"}</Text>
            <TextInputMask
              style={styles.input}
              type={'cel-phone'}
              placeholder="Seu Numero"
              keyboardType={'phone-pad'}
              onChangeText={this.handleUserChange}
              value={this.state.username}
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

            {/* <TouchableOpacity style={styles.button}
            onPress={this.handleEvoluir}
          >
            <Text style={styles.buttonText}>Evoluir</Text>
          </TouchableOpacity>   */}
          </View>
        </KeyboardAvoidingView>

      );
    }
 
      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.content}>
            <Text style={styles.loadText}>Entrando ...</Text>
          </View>
        </KeyboardAvoidingView>
      )
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
  },
  loadText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  }
});


// REDUX ============================

const mapStateToProps = store => {
  return {
    redux_username: store.geolocal.username
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ACTION_SET_GEOLOCATION
  }, dispatch)
  //  return {    
  //    add: (username) => {
  //      console.log("wtf");
  //      dispatch(Autenticacao(username));
  //    }
  //  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login)