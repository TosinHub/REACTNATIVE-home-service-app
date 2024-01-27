import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import BusinessListItemSmall from './BusinessListItemSmall';


export default function BusinessList() {


    const [businessList, setBusinessList] = useState();

    useEffect(() => {
        getBusinessList();
    })
    const getBusinessList = () => {
        GlobalApi.getBusinessList().then(response => {
           // console.log(response.businessLists)
            setBusinessList(response.businessLists)
        })
    }

    return (
        <View style={{marginTop: 10}}> 

            <Heading text={'Business Lists'} isViewAll={true} />

            <FlatList  data={businessList} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => (
                <View style={{marginRight: 10}}>
                    <BusinessListItemSmall business={item} />
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
