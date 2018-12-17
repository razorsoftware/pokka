import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet,Alert } from 'react-native'

export default class Pessoas_proximas extends Component {
    static navigationOptions = {
        title: "Pessoas Proximas"
    }

    state = {
        geolocalizacao: "",
        buscar_geolocal:true        
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

    componentDidMount(){
       // if(this.state.geolocalizacao == "")
       //     this.setState({buscar_geolocal:true})
    }

    render() {
        return (
            <View>
                {
                    renderIf(this.state.buscar_geolocal)(
                        <View hide={true}>
                            <TouchableOpacity style={styles.button}
                                onPress={this.handleBuscarGeolocalizacao}>
                                <Text style={styles.buttonText}>Buscar Localização</Text>
                            </TouchableOpacity>

                            <Text> Pessoas Próximas </Text>
                        </View>
                    )
                }
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