import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Routes from "./Routes";
import { Provider, connect } from 'react-redux';
import configureStore from './store';
const store = configureStore();

export default class App extends Component {


  render() {

    //return <Routes />
    return (
      <Provider store={store}>
        <Routes />
      </Provider>


    )
  }
}

//export default connect()(App);


