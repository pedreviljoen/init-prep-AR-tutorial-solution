import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ViroARSceneNavigator, ViroText } from 'react-viro'
import colors from '../config/colors'

//import the two scenes required by the ViroARSceneNavigator
var ViroChildScene = require('../scenes/ViroChildScene')

export default class ViroParentScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //TODO: Create the counter that will be stored on this state here
      curScene: ViroChildScene,
      count: 0,
      //TODO: The viroAppProps object is stored on this state, and is passed to all scenes through the ViroARSceneNavigator. It thus allows you to access it in
      //      every scene that is rendered through the ViroARSceneNavigator. In your scenes, access it as an object  using this.props.arSceneNavigator.viroAppProps.{fieldName}
      viroAppProps: { 
        viroF_incrementCount: this._incrementCounter,  
        viroV_count: 0
      },
      
    }

  }

  render() {
    return (
      <View style={localStyles.outer}>

        <ViroARSceneNavigator
          style={localStyles.arView}
          apiKey="EF33E0FF-4715-4D91-B854-0DD546CA7E8F"
          initialScene={{ scene: this.state.curScene }}
          viroAppProps={this.state.viroAppProps}
          ref={this._setARNavigatorRef}
        />

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: colors.FFgrey}}>
        {/**
        * TODO:
        * Pass the 'count' variable that is stored this component's state, into the text field below to display the counter's value.
        */ }
          <Text>
            The 'count' on this state is: {this.state.count}
          </Text>
        </View>

      </View>
    )
  }

  // This function creates a reffernece handle for the AR Navigator to be used by other functions
  _setARNavigatorRef = (ARNavigator) => {
    this._arNavigator = ARNavigator
  }

  /**
   * TODO:
   * The _incrementCounter() function should increment both the counter that is a) displayed on this screen in the Text field, and b) that is passed to the 
   * ViroScene and rendered in the 3D Text object
   */
  _incrementCounter = () => {
    this.setState({count: this.state.count + 1})
    this.setState(prevState => ({viroAppProps: {...prevState.viroAppProps, viroV_count: prevState.viroAppProps.viroV_count + 1}}))
  }
  
}

//styling used on this screen
var localStyles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  arView: {
    flex: 1,
  }
})

module.exports = ViroParentScreen