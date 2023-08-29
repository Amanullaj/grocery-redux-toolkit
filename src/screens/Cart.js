import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Header from '../Header'
import {useNavigation} from '@react-navigation/native'
import { addItemToCart, reduceItemFromCart, removeItemFromCart } from '../redux/CartSlice'
import CheckOutLayout from './CheckOutLayout'

const Cart = () => {
    const items = useSelector(state=>state.cart)
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([])
    const dispatch = useDispatch();
    useEffect(()=>{
        setCartItems(items.data)
    },[items]);
    const getTotal = ()=>{
        let total = 0;
        cartItems.map(item=>{
            total = total+item.qty*item.price
        })
        return total.toFixed(0)
    }
  return (
    <View style={{flex:1}}>
      <Header title={'Cart Items'} leftIcon={require('../images/back.png')}
      onClickLeftIcon={()=>navigation.goBack()}/>
      <FlatList data={cartItems} renderItem={({item,index})=>{
        return(
            <TouchableOpacity style={styles.container1} onPress={()=>navigation.navigate('ProductDetails',{data: item})}>
            <Image source={{uri: item.image}} style={styles.img1}/>
            <View style={{margin:10,padding:5}}>
            <Text style={styles.title}>{item.title.length>20 ? item.title.substring(0,20) + 
            '...' : item.title}</Text> 
            {/* if name is larger      */}
             <Text style={styles.description}>{item.description.length>30 ? item.description.substring(0,30) + 
            '...' : item.description}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={styles.price}>$.{item.price}</Text>
            <TouchableOpacity onPress={()=>{
                if (item.qty > 1) {
                    dispatch(reduceItemFromCart(item))
                } else {
                    dispatch(removeItemFromCart(index))
                }
            }}>
                <Text style={styles.txt}>-</Text>
            </TouchableOpacity>
            <Text style={{marginLeft:10,fontSize:18,color:'green'}}>{item.qty}</Text>
            <TouchableOpacity onPress={()=>{dispatch(addItemToCart(item))}}>
                <Text style={styles.txt}>+</Text>
            </TouchableOpacity>
            </View>
            </View>
          </TouchableOpacity>
        )
      }}/>
      <CheckOutLayout items={cartItems} total={getTotal()}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container1 : {flex:1,flexDirection:'row',margin:10,backgroundColor:'white',padding:10},
img1 : {height:120,width:120},
title: {fontSize:20,fontWeight:'600'},
price : {color:'green',fontSize:18,fontWeight:'600'},
txt : {borderWidth:1,padding:5,borderRadius:10,width:30,marginLeft:10,textAlign:'center'}
})