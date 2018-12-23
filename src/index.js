import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Routes from "./Routes";
import { Provider } from 'react-redux';
import {Store} from './store';

export default class App extends Component {


  render() {

    //return <Routes />
    return (
      <Provider store={Store}>
        <Routes />
      </Provider>


    )
  }
}

//export default connect()(App);


