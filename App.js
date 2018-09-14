import React, { Component } from 'react'
import { StyleSheet, StatusBar, Platform, View } from 'react-native'
import {
  ViroARSceneNavigator
} from 'react-viro'

// Navigation
import Navigation from './Navigation'

export default class ViroSample extends Component {

  render() {
    return (
      <View style={styles.main}>
        <StatusBar
          hidden={true}
        />
        <Navigation />
      </View>
      )
  }
  
}

var styles = StyleSheet.create({
  main: {
    flex: 1
  },
  arView: {
    flex: 1
  },

});

module.exports = ViroSample
