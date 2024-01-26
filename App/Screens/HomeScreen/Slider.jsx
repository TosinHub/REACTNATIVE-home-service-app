import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'


export default function Slider() {


    const [slider, setSlider] = useState();

    useEffect(()=>{
        getSliders();
    })
    const getSliders = ()=>{
        GlobalApi.getSlider().then(response =>{
            //console.log(response.sliders)
            setSlider(response.sliders)
        })
    }

    return (
      <View>
        <Text style={styles.heading} >Offers For You</Text>


      </View>
    )
  }

  const styles = StyleSheet.create({
        heading: {
            fontSize: 20,
            fontFamily: 'outfit-medium',
            marginBottom: 10
        }
  })
