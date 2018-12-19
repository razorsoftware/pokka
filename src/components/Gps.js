import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Alert } from 'react-native';

export default class GPS extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleBuscarGeolocalizacao = ()=>{
        try {
            this.setState({buscar_geolocal:false})
            navigator.geolocation.getCurrentPosition(function (pos) {
              //Sucess =====
              pos = pos.coords;
              Alert.alert("", "Latitude " + pos.latitude + " longitude " + pos.longitude);
      
            },
              function (err) {
                Alert.alert("Erro ao buscaro Geolocalização",err );
      
      
              }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
      
          } catch{
      
          }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={this.handleBuscarGeolocalizacao}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
  });