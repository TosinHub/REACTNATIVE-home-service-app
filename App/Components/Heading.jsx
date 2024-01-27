import React from 'react'
import { Text, View , StyleSheet} from 'react-native'


export default function Heading({text, isViewAll=false}) {

  return (
    <View style={styles.container}>
        <Text style={styles.heading} >{text}</Text>

        {isViewAll && (<Text>
        View All
        
        </Text>)}

    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 6
    },
    heading: {
      fontSize: 20,
      fontFamily: 'outfit-medium',
      marginBottom: 10
    }
  })
