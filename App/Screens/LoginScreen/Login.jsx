import React, { Component } from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'

export default class Login extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>


                <Image source={require('../../../assets/login.png')} style={styles.loginImage} />

                <View style={styles.SubContainer}>
                    <Text style={{ fontSize: 27, color: Colors.WHITE, textAlign: 'center' }}>
                        Let's  Find <Text style={{ fontWeight: 'bold' }}>Professional cleaning and repair </Text> services
                    </Text>
                    <Text style={{ fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20 }}>Best app to find services near you which deliver you a Professional service</Text>

                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button Pressed')}>
                        <Text style={{ textAlign: 'center', fontSize: 17, color: Colors.PRIMARY }}>Let's get started!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: Colors.BLACK,
        borderRadius: 15,

    },
    SubContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '70%',
        marginTop: -20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 40
    }
})

