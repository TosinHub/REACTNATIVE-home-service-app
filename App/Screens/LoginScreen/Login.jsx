import React, { Component } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text> 
            
            <Image source={require('../../../assets/login.png')} style={styles.loginImage}/>
             </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 4,
    borderColor: '#000'

  }
})

