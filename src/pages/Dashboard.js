import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Menu from '../components/Menu';
import Routes from "../Routes";

import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }

  state = {
    username: "",
    latitude: "",
    longitude: ""
  }

  static navigationOptions = {
    title: "Início"
  }

  componentDidMount() {
  }
  render() {
    return (
      <View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 0.3333, height: 55, backgroundColor: '#dfe6e9' }}>
            <TouchableOpacity style={{ justiftyContent: "center", alignItems: "center" }} onPress={() => this.props.navigation.navigate("Pessoas_proximas")}>
              <Icon name="map-marker" style={{ marginBottom: 10, marginTop: 5 }} size={24} color="#e84393" />
              <Text style={{ textAlign: 'center', fontSize: 8, color: "#74b9ff" }}>Próximo de Mim</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 0.3333, height: 55, backgroundColor: '#dfe6e9', justiftyContent: "center", alignItems: "center" }}>
            <Icon name="users" style={{ marginBottom: 10, marginTop: 5 }} size={24} color="#e84393" />
            <Text style={{ textAlign: 'center', fontSize: 8, color: "#74b9ff" }}>Amigos</Text>
          </View>

          <View style={{ flex: 0.3333, height: 55, backgroundColor: '#dfe6e9', justiftyContent: "center", alignItems: "center" }}>
            <Icon name="comments" style={{ marginBottom: 10, marginTop: 5 }} size={24} color="#e84393" />
            <Text style={{ textAlign: 'center', fontSize: 8, color: "#74b9ff" }}>Mensagem</Text>
          </View>

        </View>
        <Text>  {this.state.username}</Text>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    username: state.login.username
  }
}

export default connect(mapStateToProps)(Dashboard)