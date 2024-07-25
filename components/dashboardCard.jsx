import { Fontisto } from '@expo/vector-icons'
import React from 'react'
import { View,Text } from 'react-native'
import tailwind from 'twrnc'



function DashboardCard({title,navigation,total}) {
    return (
        <View style={tailwind`bg-white border-[#EDEDED]/60 border rounded-lg p-4 my-3`}>
        <View style={tailwind`flex-row items-center`}>
          <View
            style={tailwind` flex justify-center items-center w-10 h-10 mr-3`}
          >
            <Fontisto name="shopping-package" size={24} color="#0891b2" />
          </View>
          <View style={tailwind`flex-1`}>
            <Text style={tailwind`text-lg text-[#353535]`}>{title}</Text>
            <Text style={tailwind`text-gray-500`}>34 Package</Text>
          </View>
        </View>
      </View>
    )
}

export default DashboardCard
