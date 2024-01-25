import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    return (
      <Tab.Navigator>
        <Tab.Screen name='home' />
      </Tab.Navigator>
    )
}

