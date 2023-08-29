import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header'
import {useNavigation} from '@react-navigation/native'

const WishList = () => {
    const items = useSelector(state=>state.wishList)
    const navigation = useNavigation();
    const [wishListItems, setWishListItems] = useState(items.data)
  return (
    <View>
      <Header title={'Wishlist Items'}/>
      <FlatList data={wishListItems} renderItem={({item,index})=>{
        return(
            <TouchableOpacity style={styles.container1} onPress={()=>navigation.navigate('ProductDetails',{data: item})}>
            <Image source={{uri: item.image}} style={styles.img1}/>
            <View style={{margin:10,padding:5}}>
            <Text style={styles.title}>{item.title.length>20 ? item.title.substring(0,20) + 
            '...' : item.title}</Text> 
            {/* if name is larger      */}
             <Text style={styles.description}>{item.description.length>30 ? item.description.substring(0,30) + 
            '...' : item.description}</Text>
            <Text style={styles.price}>$.{item.price}</Text>
            </View>
          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

export default WishList

const styles = StyleSheet.create({
    container1 : {flex:1,flexDirection:'row',margin:10,backgroundColor:'white',padding:10},
img1 : {height:120,width:120},
title: {fontSize:20,fontWeight:'600'},
price : {color:'green',fontSize:18,fontWeight:'600'}
})