import { StyleSheet, Text, View,Dimensions,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const Header = ({title,leftIcon,rightIcon,onClickLeftIcon,onClickRightIcon,}) => {
  const cartItems = useSelector(state => state.cart);
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>onClickLeftIcon()}>
        <Image source={leftIcon} style={styles.img}/>
      </TouchableOpacity>
      <Text style={styles.txt}>{title}</Text>
     
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
        <Image source={rightIcon} style={styles.img}/>
        <View style={{height:20,width:20,borderRadius:10,position:'absolute',backgroundColor:'white',
      right:0,top:0,justifyContent:'center',alignItems:'center'}}>
        <Text>{cartItems.data.length}</Text>
        </View>
      </TouchableOpacity>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header : { backgroundColor:'#6699ff',height:60,width:'100%',padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    img : {height:40,width:40,tintColor:'white'},
    txt : {fontSize:25,color:'white',fontWeight:'bold'}
})