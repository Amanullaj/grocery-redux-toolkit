import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/Store'




const App = () => {
  return (
    <Provider store={store}>
    <Navigator />
     </Provider>
  )
}

export default App

const styles = StyleSheet.create({})