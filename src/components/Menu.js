import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const Menu = ({ navigation }) => (
  <View>

    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 0.3333, height: 55, backgroundColor: '#dfe6e9' }}>
        <TouchableOpacity style={{ justiftyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("Pessoas_proximas")}>
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

  </View>
);


export default Menu;

