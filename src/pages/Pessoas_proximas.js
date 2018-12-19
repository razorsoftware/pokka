import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,Alert } from 'react-native'

import Gps from '../components/Gps';

export default class Pessoas_proximas extends Component {
    static navigationOptions = {
        title: "Pessoas Proximas"
    }

    state = {
        geolocalizacao: "",
        buscar_geolocal:true        
      }

   

    componentDidMount(){
       // if(this.state.geolocalizacao == "")
       //     this.setState({buscar_geolocal:true})
    }

    render() {
        return (
            <View>
                {this.state.buscar_geolocal ? <Gps /> : null }   
                
            </View>
        )
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
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });