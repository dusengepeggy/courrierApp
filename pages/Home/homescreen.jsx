import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, Pressable, Platform, StatusBar } from 'react-native'
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native'
import { styles } from './homeStyle';
import tailwind from 'twrnc';
import TopBarHome from '../../components/topBarHome';
import { Fontisto } from '@expo/vector-icons';
import DashboardCard from '../../components/dashboardCard';
import { getData } from '../../apicall/requestController';
import api from '../../apicall/apiCall';

export default function Homescreen({navigation}) {
  const [countIncoming,setCountIncoming] = useState([])
  const upComingCourier = async () =>{
    try {
      const response = await getData('incoming/');
      // console.log('Upcoming Courier:', response);
      setCountIncoming(response)
    } catch (err) {
      console.error('Error fetching upcoming courier:', err);
    }
  }

    useEffect(()=>{
      upComingCourier()
    },[])

    console.log(countIncoming.length)

  return (
    <ScrollView style={[tailwind`bg-[#ffffff]`,]}>
      <View style={tailwind``}>
        <TopBarHome navigation={navigation}/>
        <View style={{ paddingHorizontal: Platform.OS === 'ios' ? 18 : 15, paddingTop: Platform.OS === 'ios' ? 20 : 32 }}>
          <Text style={tailwind`font-bold text-gray-600`}>Overview</Text>
          {["Upcoming courier","Send courier","in Transit"].map((items,index)=>{
            return <DashboardCard key={index} title={`${items}`}  total={index+10} />
          })} 
        </View>
      </View>
    </ScrollView>
  )
}
