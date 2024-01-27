import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';


export default function Slider() {


  const [slider, setSlider] = useState();

  useEffect(() => {
    getSliders();
  })
  const getSliders = () => {
    GlobalApi.getSlider().then(response => {
      //console.log(response.sliders)
      setSlider(response.sliders)
    })
  }

  return (
    <View>
      <Heading text={'Offer For You'}/>

      <FlatList data={slider} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => (
        <View style={{ marginRight: 20 }}>
          <Image source={{ uri: item?.image?.url }} style={styles.sliderImage} />
        </View>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({

  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: 'fill'
  }
})
