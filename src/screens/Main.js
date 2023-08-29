import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';

const Drawer = createDrawerNavigator();
const Main = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}options={{headerShown: false}}/>
    </Drawer.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})