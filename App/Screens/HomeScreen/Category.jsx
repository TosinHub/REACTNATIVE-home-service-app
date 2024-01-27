import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';


export default function Catergory() {


    const [category, setCategory] = useState();

    useEffect(() => {
        getCategories();
    })
    const getCategories = () => {
        GlobalApi.getCategories().then(response => {
            //console.log(response.categorys)
            setCategory(response.categories)
        })
    }

    return (
        <View>

            <Heading text={'Categories'} isViewAll={true} />

            <FlatList numColumns={4} data={category}  renderItem={({ item, index }) => index<=3 && (
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image source={{ uri: item?.icon?.url }} style={styles.categoryImage} />
                    </View>
                    <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>{item?.name}</Text>

                </View>


            )} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding: 17,
        borderRadius: 99
    },
    categoryImage: {
        width: 40,
        height: 40,

    },
    container: {
        flex: 1,
        alignItems: 'center'
    }
})
