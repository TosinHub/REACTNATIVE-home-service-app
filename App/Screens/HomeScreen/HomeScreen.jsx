import React from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Slider from './Slider'
import Catergory from './Category'

export default function HomeScreen() {

  return (
    <View>
      <Header />
      <View style={{ padding: 20 }}>
        <Slider />
        <Catergory />
      </View>
    </View>
  )
}

