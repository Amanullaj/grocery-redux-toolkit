import { StyleSheet, Text, View,StatusBar,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import Header from '../Header'
import HomeScreen from './HomeScreen';
import Search from './Search';
import WishList from './WishList';
import Notification from './Notification';
import User from './User';


const Home = () => {
    const[selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{flex:1}}>
        <StatusBar backgroundColor='#6699ff'/>
     
      {
        selectedTab == 0 ? (<HomeScreen/>) :
        selectedTab == 1 ? (<Search/>) :
        selectedTab == 2 ? (<WishList/>) :
        selectedTab == 3 ? (<Notification/>) :
        (<User/>)
      }
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=>setSelectedTab(0)}>
            <Image source={selectedTab == 0 ? require('../images/home1.png') : require('../images/home.png')} style={styles.img}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelectedTab(1)}>
            <Image source={ selectedTab == 1 ? require('../images/search1.png') : require('../images/search.png')} style={styles.img}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelectedTab(2)}>
            <Image source={ selectedTab == 2 ? require('../images/heart1.png') : require('../images/heart.png')} style={styles.img}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelectedTab(3)}>
            <Image source={selectedTab == 3 ? require('../images/bell1.png') : require('../images/bell.png')} style={styles.img}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setSelectedTab(4)}>
            <Image source={selectedTab == 4 ? require('../images/user1.png') : require('../images/user.png')} style={styles.img}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    bottom: {flexDirection:'row',width:'100%',backgroundColor:'#b3ccff',height:50,
            position:'absolute',bottom:0,justifyContent:'space-between',alignItems:'center',padding:20},
    img : {height:25,width:25}

})