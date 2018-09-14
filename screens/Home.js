import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

//miport config
import colors from '../config/colors'
import images from '../config/images'

export default class Home extends Component {

  render() {
    return (
      <View style={localStyles.outer} >

        <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
          <Image
          source={images.ff_logo}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>

        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 27, color: colors.FFblack}}>Welcome to the .Init React</Text>
          <Text style={{fontSize: 27, color: colors.FFblack}}>Viro tutorial app</Text>
        </View>
        

      </View>
    )
  }
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
    flexDirection: 'column',
  },
})

