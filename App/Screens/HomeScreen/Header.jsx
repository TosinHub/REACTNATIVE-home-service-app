import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../Utils/Colors'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {

    return (
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image source={require('../../../assets/tense-young.jpg')} style={styles.userImage} />
                    <View >
                        <Text style={{ color: Colors.WHITE }}>
                            Welcome,
                        </Text>
                        <Text style={{ color: Colors.WHITE, fontSize: 20 }}>
                            Daniel
                        </Text>
                    </View>
                </View>
                <FontAwesome name="bookmark-o" size={24} color={Colors.WHITE} />
            </View>

            <View style={styles.searchBarContainer}>
                <TextInput placeholder='Search' style={styles.textInput}/>
                <FontAwesome name="search" size={24} color={Colors.PRIMARY} style={styles.searchbtn}/>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput:{
        padding: 9,
        paddingHorizontal: 18,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width:'85%',
        fontSize: 16
    },
    searchBarContainer: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },
    searchbtn: {
        backgroundColor: Colors.WHITE,
        padding: 5,
        borderRadius: 9

    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 100
    }
})
