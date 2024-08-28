import { StyleSheet, Text, View,Image,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import Header from '../Header'
import {useNavigation,useRoute} from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addItemToWishList } from '../redux/WishListSlice'
import { addItemToCart } from '../redux/CartSlice'


const ProductDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    // const item = route.params.data {we can use this instead route.params.data}

   
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Header leftIcon={require('../images/back.png')}
      title={'Product Details'}
      rightIcon={require('../images/cart.png')}
      onClickLeftIcon={()=>navigation.goBack()}/>
      <Image source={{uri: route.params.data.image}} style={styles.img}/>
      <View>
      <Text style={styles.txt}>{route.params.data.title}</Text>
      <Text style={styles.txt1}>{route.params.data.description}</Text>
      <Text style={styles.price}><Text style={{color:'black'}}>Price : </Text> $.{route.params.data.price}</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>{dispatch(addItemToCart(route.params.data))}}>
        <Text style={styles.txt2}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{dispatch(addItemToWishList(route.params.data))}}>
        <Text style={styles.txt2}>Add to WishList</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    img : {height:300,width:'100%',resizeMode:'center'},
    txt : {fontSize:20,textAlign:'center',fontWeight:'600',color:'black',margin:20},
    txt1 : {margin:20,},
    txt2 : {fontSize:20,color:'white'},
    price : {fontSize:20,textAlign:'center',color:'green',fontWeight:'600'},
    btn : {backgroundColor:'orange',margin:20,padding:10,alignItems:'center',borderRadius:20,}
})