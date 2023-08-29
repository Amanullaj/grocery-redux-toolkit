import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,ScrollView,FlatList } from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header'
import {useNavigation} from '@react-navigation/native'

const Search = () => {
    const navigation = useNavigation();
    const products = useSelector(state=>state)
    const[search,setSearch] = useState('');
    const[oldData, setOldData] = useState(products.product.data);
    const[searchedList, setSearchedList] = useState(oldData);
    const filterData = (text) =>{
    let newData = oldData.filter(item => {
        return item.title.toLowerCase().match(text.toLowerCase());
    })
        setSearchedList(newData)
    }
    // const[data,setData] = useState([])
    // const searchData = async (text) => {
    //     const url = `https://fakestoreapi.com/products?q=${text}`
    //     let result = await fetch(url);
    //     result = await result.json();
    //     if (result){
    //     setData(result)
    //     }
    // }
  
    
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Header title={'Search Items'}/>
      <View style={styles.container}>
        <Image source={require('../images/search.png')} style={styles.img}/>
        <TextInput placeholder='Search items here'
        value={search} onChangeText={(text)=>{
            setSearch(text);
            filterData(text)}}/>
        {
            search !== '' && ( 
            <TouchableOpacity style={{marginLeft:120}} onPress={()=>{setSearch('');filterData('')}}>
                <Image source={require('../images/close.png')} style={styles.img}/>
                </TouchableOpacity>
                )
        }
        </View>
        <View style={{flex:1}}>
       <FlatList data={searchedList} renderItem={({item, index})=>{
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
    </View>

  )
}

export default Search

const styles = StyleSheet.create({
    img : {height:30,width:30,margin:10},
    container : {flexDirection:'row',alignItems:'center',margin:30,height:50,width:350,borderWidth:0.7,
borderRadius:20,},
container1 : {flex:1,flexDirection:'row',margin:10,backgroundColor:'white',padding:10},
img1 : {height:120,width:120},
title: {fontSize:20,fontWeight:'600'},
price : {color:'green',fontSize:18,fontWeight:'600'}

})