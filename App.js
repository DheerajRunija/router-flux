
import React, { Component} from "react";
import Routes from "./android/app/src/components/Routes";


import {
  View,
  Text,
  AppRegistry,
} from 'react-native'

const App = () => {
  return(
    < Routes />
 
  );

}
export default App;
AppRegistry.registerComponent('App', ()=>App);