import React from 'react';
import { View, TextInput, Text } from 'react-native';
import tailwind from 'twrnc';

function InputTextCompont({ label, name, value, onChangeText }) {
    return (
        <View>
            <Text style={tailwind`text-sm font-semibold text-gray-600`}>{label}</Text>
            <TextInput
              style={tailwind`border p-2 mt-2 mb-4 rounded outline-none border-black/50 pl-4`}
              onChangeText={(text) => onChangeText(name, text)}
              value={value}
              placeholder={`Enter your ${label}`}
            />
        </View>
    );
}

export default InputTextCompont;
