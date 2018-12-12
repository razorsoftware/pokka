import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends Component {
   
    render() {
      return (
        <View> 
  
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 0.3333, height: 50, backgroundColor: 'powderblue' }}>
              <Text style={{textAlign:'center'}}>Procurar</Text>
            </View>
            <View style={{ flex: 0.3333, height: 50, backgroundColor: 'skyblue' }}>
              <Text style={{textAlign:'center'}}>Amigos</Text>
            </View>
  
            <View style={{ flex: 0.3333, height: 50, backgroundColor: 'steelblue' }}>
              <Text style={{textAlign:'center'}}>Mensagens</Text>
            </View>
          </View>
  
        </View>
      );
    }
  }