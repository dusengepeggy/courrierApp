import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/button'
import tailwind from 'twrnc'
import { Image } from 'react-native'
import SwiperFlatList from 'react-native-swiper-flatlist'


export default function Tutorialscreen({navigation}) {
  const Images = [

    require('../assets/delivery1.png'),
    require('../assets/delivery3.png'),
    require('../assets/delivery4.webp')


  ]
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];


  return (
    <View>
      <View style={tailwind`h-[60%] bg-[#F2F8FA] `} className="bo" >

        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination 
          paginationActiveColor='#4CC6E2'
          paginationDefaultColor='#C4C4CB'
          paginationStyleItemActive={
            {
              height:12,
              width:12,
              
            }
          }
          paginationStyleItemInactive={
            {
              height:10,
              width:10,
            
            }
          }

          data={Images}
          renderItem={({ item }) => (
            <View style={[styles.child, { backgroundColor: item }]}>
              <Image source={item} style={tailwind`w-[100%] h-[100%%] self-center `} resizeMode='contain'></Image>
            </View>
          )}
        />






      </View>
      <View style={tailwind`h-[40%] pb-3 bg-[#FFFFFF] pt-8`}>
        <Text style={tailwind`font-500 self-center text-18px leading-tight text-center w-[90%] my-4`} >
          Monitor Your Package's Journey At Every Stage
        </Text>
        <Text style={tailwind`font-400 self-center text-13px leading-tight text-center w-[70%] opacity-40 mt-2 mb-5`} >
          Keep track of your package's location in real-time
        </Text>
        <Button name={"Next"} action={() => {
          navigation.navigate("Login")
        }} />
      </View>

    </View>

  )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  child: { width, justifyContent: 'center' },

});