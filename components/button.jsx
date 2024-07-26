import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'


export default function ButtonComponent({name,action}) {
    return (
        <TouchableOpacity onPress={action} style={tw`bg-[#0891b2] w-full rounded-md py-[14px]  self-center my-[1px]`} >
            <Text style={tw`text-[#FFFFFF] self-center font-bold text-center`}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

