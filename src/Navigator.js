import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import CheckOut from './screens/CheckOut';

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Main' component={Main} options={{headerShown: false}}/>
            <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown: false}}/>
            <Stack.Screen name='Cart' component={Cart} options={{headerShown:false}}/>
            <Stack.Screen name='CheckOut' component={CheckOut} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({})