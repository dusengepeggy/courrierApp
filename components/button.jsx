import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'twrnc'


export default function Button({name,action}) {
    return (
        <TouchableOpacity onPress={action} style={tw`bg-[#4CC6E2] w-[90%] rounded-md py-[20px]  self-center my-[20px]`} >

            
            <Text style={tw`text-[#FFFFFF] self-center font-bold text-center`}>
                {name}
            </Text>
           

        </TouchableOpacity>
    )
}

