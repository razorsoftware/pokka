import React, { Component } from 'react';
import {Picker, Alert, View, Text, KeyboardAvoidingView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInputMask } from  'react-native-masked-text';

import api from '../services/api';

class Criar_usuario extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        nome: "",
        usuario:"",
        senha: "",
        confirm_senha:"",
        sexo:"masculino"
    }

    goback = () =>{
        this.props.navigation.pop();
    }
    //senha:req.body.senha,
    //sexo:req.body.sexo

    handleCadastrar = () => {

        if(this.state.usuario.length != 15){
            Alert.alert("","Numero de telefone inválido !");
            return;
        }

        if(this.state.nome.length < 3){
            Alert.alert("","Seu nome deve ser um nome válido");
            return;
        }


        // Verifica se senha é válida
        if(this.state.senha.length < 6){
            Alert.alert("","Senha deve conter pelo menos 6 Dígitos !");
            return;
        }

        if(this.state.senha != this.state.confirm_senha){
            Alert.alert("","Senha e confirmação de senha não são iguais !");
            return;
        }
//
        this.cadastrar();
     //   Alert.alert("Bem vindo ","Cadastro realizado com sucesso !");
      //  this.props.navigation.navigate("Login");
    }

    cadastrar = async() =>{
        const post = {
            nome:this.state.nome,
            usuario:this.state.usuario,
            senha:this.state.senha,
            sexo:this.state.sexo
        };

        api.post('/pokka/usuario/criar', post).then(function(res){
            Alert.alert("","Cadastro realizado com sucesso !");
            this.props.navigation.pop();       
        }).catch(function(error) {
            Alert.alert("", "Falha de comunicação ou usuario já existente com este numero !");          
        });

        //
    }

    handleUserChange = usuario => {
        this.setState({ usuario });
    }

    handleNameChange = nome => {
        this.setState({ nome });
    }

    handlePasswordChange = senha => {
        this.setState({ senha });
    }
    handleConfirmPasswordChange = confirm_senha => {
        this.setState({ confirm_senha });
    }

    render() {
        return (

            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.content}>                    
                    <TextInputMask                       
                        style={styles.input}
                        type = {'cel-phone'} 
                        placeholder="Seu Numero"                        
                        keyboardType={'phone-pad'}
                        onChangeText={this.handleUserChange}
                        value={this.state.usuario}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Seu Nome"
                        value={this.state.nome}
                        onChangeText={this.handleNameChange}
                    />

                    <Picker
                        selectedValue={this.state.sexo}                    
                        onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>
                        <Picker.Item label="Masculino" value="masculino" />
                        <Picker.Item label="Feminino" value="feminino" />
                    </Picker>

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={this.state.senha}
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry={true}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirmação de Senha"
                        value={this.state.confirm_senha}
                        onChangeText={this.handleConfirmPasswordChange}
                        secureTextEntry={true}
                    />

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

export default Criar_usuario;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },

    content: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30
    },

    input: {
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        height: 44,
        paddingHorizontal: 15,
        alignSelf: "stretch",
        marginTop: 10
    },

    button: {
        height: 44,
        alignSelf: "stretch",
        marginTop: 10,
        backgroundColor: "#4BB0EE",     
        justifyContent: "center",
        alignItems: "center"
    },

    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold"
    }
});