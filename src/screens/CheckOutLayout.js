import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CheckOutLayout = ({items,total}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <View style={{margin:10}}>
        <Text style={{fontSize:20}}>Total: $. <Text style={{fontSize:20,color:'green'}}>{total}</Text></Text>
     </View>
     <View style={{backgroundColor:'orange',padding:10,margin:10,alignItems:'center',justifyContent:'center',borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate('CheckOut')}>
            <Text style={{fontSize:20,color:'white'}}>CheckOut</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default CheckOutLayout

const styles = StyleSheet.create({
    container : {position:'absolute',bottom:0,height:70,backgroundColor:'white',width:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}
})