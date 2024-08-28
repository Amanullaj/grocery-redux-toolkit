import { StyleSheet, Text, View,TouchableOpacity,FlatList,Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import Header from '../Header'
import { useNavigation } from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'
import RazorpayCheckout from 'react-native-razorpay';

const CheckOut = () => {
    const items = useSelector(state=>state.cart)
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState([]);
    const [selected, setSelected] = useState();
    useEffect(()=>{
        setCartItems(items.data)
    },[items]);
    const getTotal = () => {
        let total = 0;
        cartItems.map(item => {
          total = total + item.qty * item.price;
        });
        return total.toFixed(0);
      };
  return (
    <View style={styles.container}>
        
      <Header leftIcon={require('../images/back.png')} rightIcon={require('../images/cart.png')}
       onClickLeftIcon={()=>navigation.goBack()}
      title={'CheckOut'}/>
      <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.5,margin:10}}>
      <Text style={{fontSize:20,fontWeight:'600'}}>Total</Text>
      <Text style={{fontSize:20,fontWeight:'600',color:'green'}}>$. {getTotal()}</Text>
      </View>
      <Text style={{fontSize:20,color:'black',margin:10}}>Select Payment Mode</Text>
      <View style={{margin:10}}>
        <TouchableOpacity onPress={()=>setSelected(0)}>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
        <Image source={selected == 0 ? require('../images/radio.png') : require('../images/radio1.png')} style={styles.img}/>
        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Credit Card</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelected(1)}>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
        <Image source={selected == 1 ? require('../images/radio.png') : require('../images/radio1.png')} style={styles.img}/>
        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Debit Card</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelected(2)}>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
        <Image source={selected == 2 ? require('../images/radio.png') : require('../images/radio1.png')} style={styles.img}/>
        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>UPI</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelected(3)}>
        <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
        <Image source={selected == 3 ? require('../images/radio.png') : require('../images/radio1.png')} style={styles.img}/>
        <Text style={{fontSize:18,fontWeight:'600',color:'black'}}>Net Banking</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor:'green',bottom:20,position:'absolute',padding:10,borderRadius:10,alignSelf:'center'}}>
      <TouchableOpacity onPress={()=>{
         var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_L9vYyQ7L4Qnz5J', // Your api key
            amount: getTotal() * 100,
            name: 'Grocery Payment',
            prefill: {
              email: 'void@razorpay.com',
              contact: '9191919191',
              name: 'Razorpay Software'
            },
            theme: {color: 'blue'}
          }
          RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      }}>
        <Text style={{color:'white',fontSize:20}}>Pay & Order</Text>
      </TouchableOpacity>
      </View>
      </View>
      
  )
}

export default CheckOut

const styles = StyleSheet.create({
    container : {flex:1,backgroundColor:'white'},
    img : {height:30,width:30,marginRight:10}
    
})