import { StyleSheet, Text,TouchableOpacity, View,FlatList,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import Header from '../Header'
import {useNavigation} from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addProducts } from '../redux/ProductsSlice'


const HomeScreen = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState();
    const dispatch = useDispatch();
    useEffect(()=>{
        getProducts();
    },[])
    const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setProducts(json);
                json.map(item => {
                  item.qty = 1;
                });
                dispatch(addProducts(json));
            })
    };
  return (
    <View style={{flex:1}}>
       <Header leftIcon={require('../images/menu.png')}
      rightIcon={require('../images/cart.png')}
      title={'Grocery App'} onClickLeftIcon={()=>navigation.openDrawer()}
      isCart={true}/>
      <FlatList 
      data = {products}
      renderItem={({item,index})=>{
      return(
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetails',{data: item})}>
        <Image source={{uri: item.image}} style={styles.img}/>
        <View style={{margin:10,padding:5}}>
        <Text style={styles.title}>{item.title.length>20 ? item.title.substring(0,20) + 
        '...' : item.title}</Text> 
        {/* if name is larger      */}
         <Text style={styles.description}>{item.description.length>30 ? item.description.substring(0,30) + 
        '...' : item.description}</Text>
        <Text style={styles.price}>$.{item.price}</Text>
        </View>
      </TouchableOpacity>)}}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {flex:1,flexDirection:'row',margin:10,backgroundColor:'white',padding:10},
    img : {height:120,width:120,resizeMode:'center'},
    title: {fontSize:20,fontWeight:'600'},
    price : {color:'green',fontSize:18,fontWeight:'600'}
})