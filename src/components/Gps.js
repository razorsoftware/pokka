import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Alert ,KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import{ACTION_SET_GEOLOCATION} from '../actions';

class GPS extends Component {
    constructor(props) {
        super(props);
       
    }

    state = {
        latitude:''
    };

        handleBuscarGeolocalizacao = ()=>{
        try {



            
            navigator.geolocation.getCurrentPosition(function (pos) {
              //Sucess =====
              pos = pos.coords;
              if(pos.latitude == 0 && pos.longitude == 0){
                Alert.alert("", "Não foi possivel obter sua Geolocalização !");
              }else{
                this.ACTION_SET_GEOLOCATION("teste");
                
                Alert.alert("", "Geolocal obtido !");
              }
            },
              function (err) {
                Alert.alert("Erro ao buscar Geolocalização",err);
              }, { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
              this.setState({buscar_geolocal:false})
          } catch{
      
          }
    }

    render() {
        const {
            clickButton,
            newValue
        } = this.props;

        const {ACTION_SET_GEOLOCATION, latitude } = this.props;

        return (
            <View style={styles.content}>
                <Text style={{textAlign: 'center'}}>Ops ! não foi possivel obter sua geolocalização </Text>
                <Text style={{textAlign: 'center'}}>Ative sua localização para localizar as pessoas mais próximas !</Text>
                <TouchableOpacity style={styles.button}
                    onPress={this.handleBuscarGeolocalizacao}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
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
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30
      }, buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
      }
  
  });

//const mapStateToProps = store => ({
//  newValue: store.clickState.newValue
//});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ACTION_SET_GEOLOCATION }, dispatch);
  
export default connect(mapDispatchToProps)(GPS);