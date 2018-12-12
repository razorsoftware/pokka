import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';

import Menu from '../components/Menu';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: "",
      longitude: ""
    };
  }
  static navigationOptions = {
    title: "Início"
  }

  componentDidMount() {

    try {

      navigator.geolocation.getCurrentPosition(function (pos) {
        //Sucess =====
        pos = pos.coords;
        Alert.alert("", "Latitude " + pos.latitude + " longitude " + pos.longitude);

      },
        function (err) {
          // Error

        }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });

    } catch{

    }

  }




  render() {
    return (
      <View>
        <View>
          <Menu />
        </View>



      </View>
    );
  }
}
